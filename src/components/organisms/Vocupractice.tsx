import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { selectVocupractice, loadVocupractice, setType, setReading } from '../../features/vocupractice/vocupracticeSlice';

import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Checkbox from '../atoms/Checkbox';
import VocupracticeRadioBtn from '../molecules/VocupracticeRadioBtn';

interface WrapperProps {
    column?: boolean;
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: auto;
    margin-bottom: auto;
    align-items: center;
`

const Word = styled.span`
    font-family: ${({theme}) => theme.secondaryFont};
    color: ${({theme}) => theme.fontColor};
    font-size: 3em;
    text-align: center;
`

const Reading = styled.span`
    font-family: ${({theme}) => theme.secondaryFont};
    color: ${({theme}) => theme.fontColorSecondary};
    font-size: 1.1em;
    text-align: center;
    margin-bottom: 5px;
`

const StyledInput = styled(Input)`
    margin: 5px 0px;
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
    const [translationValue, setTranslationValue] = useState('');

    useEffect(() => {
        dispatch(loadVocupractice());
    }, [dispatch])

    const handleTranslationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTranslationValue(e.target.value);
    }

    const handleTranslationCheck = () => {
        
    }

    const handleReadingCheck = () => {

    }

    const handleTypeChange = (type: string) => {
        dispatch(setType(type));
    }

    const handleReadingCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setReading(e.target.checked));
    }

    return (
        <Container>
            <Word>食べる</Word>
            {vocupracticeSelector.reading && <Reading>(taberu)</Reading>}
            {(vocupracticeSelector.type === 'translation' || vocupracticeSelector.type === 'both') ? <StyledInput placeholder="Translation" onKeyDown={handleTranslationCheck} onChange={handleTranslationChange} value={translationValue} /> : ''}
            {(vocupracticeSelector.type === 'reading' || vocupracticeSelector.type === 'both' ) ? <StyledInput placeholder="Reading" onKeyDown={handleReadingCheck} onChange={handleTranslationChange} value={translationValue} /> : ''}
            <Wrapper>
                <StyledButton backgroundColor="normal" width="small">Answer</StyledButton>
                <StyledButton backgroundColor="normal" width="small">Next</StyledButton>
                <StyledButton backgroundColor="normal" width="small">Check</StyledButton>
            </Wrapper>
            <Wrapper column>
                <StyledVocupracticeRadioBtn checked={vocupracticeSelector.type === 'translation'} text="translation" name="type" onChange={() => handleTypeChange('translation')} />
                <StyledVocupracticeRadioBtn checked={vocupracticeSelector.type === 'reading'} text="reading" name="type" onChange={() => handleTypeChange('reading')} />
                <StyledVocupracticeRadioBtn checked={vocupracticeSelector.type === 'both'} text="both" name="type" onChange={() => handleTypeChange('both')} />
            </Wrapper>
            <Checkbox checked={vocupracticeSelector.reading} label="show reading" onChange={handleReadingCheckbox} />
        </Container>
    );
};

export default Vocupractice;