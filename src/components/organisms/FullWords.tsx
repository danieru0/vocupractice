import React, { useState, useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Redirect, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHotkeys } from 'react-hotkeys-hook';
import ReactTooltip from 'react-tooltip';

import { Words } from '../../features/vocabulary/vocabularySlice';

import useAfterUserType from '../../hooks/useAfterUserType';

import showNotification from '../../helpers/showNotification';

import { selectVocabulary, deleteWord, searchWords, setImportant } from '../../features/vocabulary/vocabularySlice';
import { setCategoryId } from '../../features/vocupractice/vocupracticeSlice';

import Button from '../atoms/Button';
import WordsTable from '../molecules/WordsTable';
import Input from '../atoms/Input';
import ScrollToTop from '../molecules/ScrollToTop';
import DropDownMenu from '../molecules/DropDownMenu';

interface IFullWords {
    categoryId: string;
    onCategoryDeleteclick: (categoryId: string) => void;
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: auto;
    width: 900px;
    position: relative;

    @media (max-width: 930px) {
        width: 90%;
    }
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10px;

    @media (max-width: 930px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
    }

    @media (max-width: 430px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const StyledButton = styled(Button)`
    @media (max-width: 717px) {
        font-size: 1em;
    }
`

const StyledInput = styled(Input)`
    width: 100%;
    margin-bottom: 10px;
`

const FullWords = ({categoryId, onCategoryDeleteclick}: IFullWords) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const vocabularySelector = useSelector(selectVocabulary);
    const containerRef = useRef<HTMLDivElement>(null)
    const [selectedWords, setSelectedWords] = useState<{[key: string]: boolean}>({});
    const [searchValue, setSearchValue] = useState('');
    const [dropDownMenuShow, setDropDownMenuShow] = useState(false);
    const [dropdownMenuLeft, setDropdownMenuLeft] = useState(0);
    const [dropdownMenuTop, setDropdownMenuTop] = useState(0);
    const [dropdownMenuWord, setDropDownMenuWord] = useState<Words>();
    
    const searchQuery = useAfterUserType(searchValue);

    useHotkeys('ctrl+a', (e) => handleAddWordShortcut(e));

    const handleAddWordShortcut = (e: KeyboardEvent) => {
        e.preventDefault();
        history.push(`/category/${categoryId}/add`);
    }

    const handleWordDelete = useCallback((wordId: string) => {
        if (window.confirm('Are you sure you want to delete this word?')) {
            dispatch(deleteWord({
                categoryId: categoryId,
                wordId: wordId,
                notification: true
            }))
        }
    }, [categoryId, dispatch]);

    const handleCheckClick = useCallback((wordId: string, checked: boolean) => {
        setSelectedWords({...selectedWords, [wordId]: checked});
    }, [selectedWords]);

    const handleDeleteSelected = () => {
        if (window.confirm('Are you sure you want to delete all selected words?')) {
            Object.keys(selectedWords).map((id) => {
                const isChecked = selectedWords[id];

                if (!isChecked) {
                    return false;
                }

                return dispatch(deleteWord({
                    categoryId: categoryId,
                    wordId: id,
                    notification: false
                }))
            })

            showNotification('Success!', 'Selected words has been deleted!', 'success');
        }
    }

    const handleMenuClick = (e: React.MouseEvent<HTMLButtonElement>, word: Words) => {
        e.preventDefault();
        e.stopPropagation();

        const targetRect = e.currentTarget.getBoundingClientRect();

        if (containerRef && containerRef.current) {
            let left = targetRect.left - containerRef.current.offsetLeft;
            let top = targetRect.top - containerRef.current.offsetTop + window.scrollY;

            if (left + 250 >= window.innerWidth - 250) {
                left -= 220;
            }

            setDropdownMenuLeft(left);
            setDropdownMenuTop(top);
            setDropDownMenuWord(word);
            setDropDownMenuShow(true);
        }
    }

    const handleImportantClick = (wordId: string) => {
        dispatch(setImportant({
            categoryId: categoryId,
            wordId: wordId,
            important: dropdownMenuWord!.important ? false : true
        }))
    }

    const handlePracticeClick = () => {
        dispatch(setCategoryId(categoryId));

        history.push('/practice');
    }

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }

    useEffect(() => {
        const handleOutsideClick = () => {
            if (dropDownMenuShow) {
                setDropDownMenuShow(false);
            }
        }

        document.addEventListener('click', handleOutsideClick)

        return () => document.removeEventListener('click', handleOutsideClick);
    }, [dropDownMenuShow]);

    useEffect(() => {
        dispatch(searchWords({query: searchQuery, categoryId}))
    }, [searchQuery, categoryId, dispatch]);

    if (!vocabularySelector.categories[categoryId]) {
        return <Redirect to="/" />
    }

    return (
        <Container ref={containerRef}>
            <ReactTooltip effect="solid" />
            <ScrollToTop />
            <Wrapper>
                <StyledButton onClick={handlePracticeClick} backgroundColor="normal" width="small">Practice</StyledButton>
                <StyledButton data-tip="(ctrl + a)" href={`/category/${categoryId}/add`} backgroundColor="normal" width="small">Add word</StyledButton>
                <StyledButton onClick={() => onCategoryDeleteclick(categoryId)} backgroundColor="delete" width="small">Delete category</StyledButton>
                <StyledButton onClick={handleDeleteSelected} backgroundColor="delete" width="small">Delete selected</StyledButton>
            </Wrapper>
            <StyledInput iconType="search" onChange={handleSearchChange} value={searchValue} />
            <WordsTable categoryId={categoryId} onMenuClick={handleMenuClick} onWordCheckClick={handleCheckClick} onWordDeleteClick={handleWordDelete} words={vocabularySelector.searchWords.length === 0 ? vocabularySelector.categories[categoryId].words : vocabularySelector.searchWords} />
            {dropDownMenuShow && <DropDownMenu onImportantClick={handleImportantClick} word={dropdownMenuWord} left={dropdownMenuLeft} top={dropdownMenuTop} />}
        </Container>
    );
};

export default FullWords;