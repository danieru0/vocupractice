import React, { useEffect, useState, useRef, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

import { selectVocupractice, loadVocupractice, setType, setReading, loadRandomWordFromCategory, loadRandomWordFromMultipleCategories, setWord, setCurrentWordImportant } from '../../features/vocupractice/vocupracticeSlice';
import { selectVocabulary, setImportant } from '../../features/vocabulary/vocabularySlice';

import ifEqual from '../../helpers/ifEqual';

import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Checkbox from '../atoms/Checkbox';
import VocupracticeRadioBtn from '../molecules/VocupracticeRadioBtn';

interface WrapperProps {
    column?: boolean;
}

interface InputProps {
    isCorrect: boolean;
}

interface WordProps {
    important: boolean | undefined;
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: auto;
    margin-bottom: auto;
    align-items: center;
`

const Word = styled.button<WordProps>`
    font-family: ${({theme}) => theme.secondaryFont};
    font-size: 3em;
    text-align: center;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;

    ${({important}) => important ? (
            css`
                color: red;
            `
        ) : (
            css`
                color: ${({theme}) => theme.fontColor};
            `
        )
    }
`

const Reading = styled.span`
    font-family: ${({theme}) => theme.secondaryFont};
    color: ${({theme}) => theme.fontColorSecondary};
    font-size: 1.1em;
    text-align: center;
    margin-bottom: 5px;
`

const StyledInput = styled(Input)<InputProps>`
    margin: 5px 0px;
    
    & > input {
        transition: background .3s ease-in-out;
    }

    ${({isCorrect}) => isCorrect && css`
        & > input {
            background: #33F633;
            pointer-events: none;
        }
    `}
`

const Wrapper = styled.div<WrapperProps>`
    display: flex;
    margin: 5px 0px;

    ${({column}) => column && css`
        flex-direction: column;
    `}
`

const StyledButton = styled(Button)`
    font-size: 0.7em;
    margin: 0px 5px;
`

const StyledVocupracticeRadioBtn = styled(VocupracticeRadioBtn)`
    margin: 0px 10px;
`

const Vocupractice = () => {
    const dispatch = useDispatch();
    const vocupracticeSelector = useSelector(selectVocupractice);
    const vocabularySelector = useSelector(selectVocabulary);
    const [translationValue, setTranslationValue] = useState('');
    const [readingValue, setReadingValue] = useState('');
    const [translationCorrect, setTranslationCorrect] = useState('');
    const [readingCorrect, setReadingCorrect] = useState('');
    const [allCorrect, setAllCorect] = useState(false);

    const readingInputRef = useRef<HTMLInputElement>(null);
    const translationInputRef = useRef<HTMLInputElement>(null);

    const initNewWord = useCallback(() => {
        if (vocupracticeSelector.categoryId !== '') {
            dispatch(loadRandomWordFromCategory(vocupracticeSelector.categoryId));
        } else {
            dispatch(loadRandomWordFromMultipleCategories(vocupracticeSelector.selectedCategoriesId));
        }
    }, [dispatch, vocupracticeSelector.categoryId, vocupracticeSelector.selectedCategoriesId]);

    useEffect(() => {
        dispatch(loadVocupractice());

        initNewWord();

        return () => {
            dispatch(setWord({word: null, selectedCategoryId: ''}));
        }
    }, [dispatch, vocupracticeSelector.categoryId, vocupracticeSelector.selectedCategoriesId, initNewWord])

    useEffect(() => {
        if (translationCorrect === 'true' && readingCorrect === 'true') {
            setAllCorect(true);
        }
    }, [translationCorrect, readingCorrect])

    const handleTranslationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (translationCorrect !== 'true') {
            setTranslationValue(e.target.value);
        }
    }

    const handleReadingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (readingCorrect !== 'true') {
            setReadingValue(e.target.value);
        }
    }

    const handleTranslationCheck = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (vocupracticeSelector.word && (e.key === 'Enter' || e.key === 'Tab')) {
            if (!vocupracticeSelector.word.reading) {
                if (ifEqual(translationValue, vocupracticeSelector.word.translation)) {
                    setTranslationCorrect('true');
                    setReadingCorrect('true');
                }
            } else {
                if (ifEqual(translationValue, vocupracticeSelector.word.translation)) {
                    setTranslationCorrect('true');

                    if (vocupracticeSelector.type !== 'both') {
                        setReadingCorrect('true');
                    }
                }
            }

            if (vocupracticeSelector.type === 'both' && e.key !== 'Tab') {
                readingInputRef.current && readingInputRef.current.focus();
            }
        }
    }

    const handleReadingCheck = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (vocupracticeSelector.word && e.key === 'Enter') {
            if (vocupracticeSelector.word.reading) {
                if (ifEqual(readingValue, vocupracticeSelector.word.reading)) {
                    setReadingCorrect('true');

                    if (translationCorrect !== 'true') {
                        if (ifEqual(translationValue, vocupracticeSelector.word.translation)) {
                            setTranslationCorrect('true');
                        }
                    }

                    if (vocupracticeSelector.type === 'reading') {
                        setTranslationCorrect('true');
                    }
                }
            }
        }
    }

    const handleCheckClick = () => {
        if (vocupracticeSelector.word) {
            if (ifEqual(translationValue, vocupracticeSelector.word.translation)) {
                setTranslationCorrect('true');
            }

            if (vocupracticeSelector.word.reading) {
                if (vocupracticeSelector.type === 'reading' || vocupracticeSelector.type === 'both') {
                    if (ifEqual(readingValue, vocupracticeSelector.word.reading)) {
                        setReadingCorrect('true');
                    }
                } else {
                    setReadingCorrect('true');
                }
            } else {
                setReadingCorrect('true');
            }
        }
    }

    const handleImportantClick = () => {
        dispatch(setImportant({
            categoryId: vocupracticeSelector.word?.categoryId ? vocupracticeSelector.word.categoryId : vocupracticeSelector.categoryIdFromSelected ? vocupracticeSelector.categoryIdFromSelected : vocupracticeSelector.categoryId, 
            important: vocupracticeSelector.word!.important ? !vocupracticeSelector.word!.important : true,
            wordId: vocupracticeSelector.word!.id
        }))
        dispatch(setCurrentWordImportant(vocupracticeSelector.word!.important ? !vocupracticeSelector.word!.important : true))
    }

    const resetWord = () => {
        setTranslationValue('');
        setReadingValue('');
        setTranslationCorrect('');
        setReadingCorrect('');
        setAllCorect(false);
    }

    const handleNextClick = () => {
        resetWord();

        initNewWord();
    }

    const handleAnswerClick = () => {
        if (vocupracticeSelector.word) {
            setTranslationValue(vocupracticeSelector.word.translation);
            setReadingValue(vocupracticeSelector.word.reading ? vocupracticeSelector.word.reading : '');
            setTranslationCorrect('true');
            setReadingCorrect('true');
        }
    }

    const handleVocupracticeKeyEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter' && allCorrect) {
            resetWord();

            initNewWord();

            translationInputRef.current!.focus();
        }
    }

    const handleTypeChange = (type: string) => {
        dispatch(setType(type));

        resetWord();
    }

    const handleReadingCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setReading(e.target.checked));
    }

    if (vocupracticeSelector.categoryId === '' && vocupracticeSelector.selectedCategoriesId.length === 0) {
        return <Redirect to="/" />
    }

    if (!vocupracticeSelector.word) {
        if (vocupracticeSelector.categoryId === 'importantWords' && vocabularySelector.categories['importantWords'].words.length === 0) {
            return <Redirect to="/" />
        } else {
            return (
                <Container />
            )
        }
    }
    
    return (
        <Container onKeyDown={handleVocupracticeKeyEnter}>
            <ReactTooltip effect="solid" />
            <Word onDoubleClick={handleImportantClick} data-tip={vocupracticeSelector.word.important ? 'Click twice to make this word normal' : 'Click twice to make this word important'} important={vocupracticeSelector.word.important} >{vocupracticeSelector.word.word}</Word>
            {vocupracticeSelector.reading && vocupracticeSelector.word.reading && <Reading>{`(${vocupracticeSelector.word.reading})`}</Reading>}
            {(vocupracticeSelector.type === 'translation' || vocupracticeSelector.type === 'both') ? <StyledInput isCorrect={translationCorrect === 'true' ? true : false} ref={translationInputRef} placeholder="Translation" onKeyDown={handleTranslationCheck} onChange={handleTranslationChange} value={translationValue} /> : ''}
            {(vocupracticeSelector.word.reading && ( vocupracticeSelector.type === 'reading' || vocupracticeSelector.type === 'both') ) ? <StyledInput isCorrect={readingCorrect === 'true' ? true : false} ref={readingInputRef} placeholder="Reading" onKeyDown={handleReadingCheck} onChange={handleReadingChange} value={readingValue} /> : ''}
            <Wrapper>
                <StyledButton onClick={handleAnswerClick} backgroundColor="normal" width="small">Answer</StyledButton>
                <StyledButton onClick={handleNextClick} backgroundColor="normal" width="small">Next</StyledButton>
                <StyledButton onClick={handleCheckClick} backgroundColor="normal" width="small">Check</StyledButton>
            </Wrapper>
            {
                vocupracticeSelector.word.reading && (
                    <Wrapper column>
                        <StyledVocupracticeRadioBtn checked={vocupracticeSelector.type === 'translation'} text="translation" name="type" onChange={() => handleTypeChange('translation')} />
                        <StyledVocupracticeRadioBtn checked={vocupracticeSelector.type === 'reading'} text="reading" name="type" onChange={() => handleTypeChange('reading')} />
                        <StyledVocupracticeRadioBtn checked={vocupracticeSelector.type === 'both'} text="both" name="type" onChange={() => handleTypeChange('both')} />
                    </Wrapper>
                )
            }
            {vocupracticeSelector.word.reading && <Checkbox checked={vocupracticeSelector.reading} label="show reading" onChange={handleReadingCheckbox} />}
        </Container>
    );
};

export default Vocupractice;