import React, { useState } from 'react';
import styled from 'styled-components';
import { Redirect, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectVocabulary, deleteWord } from '../../features/vocabulary/vocabularySlice';
import { setCategoryId } from '../../features/vocupractice/vocupracticeSlice';

import Button from '../atoms/Button';
import WordsTable from '../molecules/WordsTable';

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
`

const StyledButton = styled(Button)`
    @media (max-width: 700px) {
        font-size: 1em;
    }
`

const FullWords = ({categoryId, onCategoryDeleteclick}: IFullWords) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const vocabularySelector = useSelector(selectVocabulary);
    const [selectedWords, setSelectedWords] = useState<{[key: string]: boolean}>({});

    const handleWordDelete = (wordId: string) => {
        if (window.confirm('Are you sure you want to delete this word?')) {
            dispatch(deleteWord({
                categoryId: categoryId,
                wordId: wordId
            }))
        }
    }

    const handleCheckClick = (wordId: string, checked: boolean) => {
        setSelectedWords({...selectedWords, [wordId]: checked});
    }

    const handleDeleteSelected = () => {
        if (window.confirm('Are you sure you want to delete all selected words?')) {
            Object.keys(selectedWords).map((id) => {
                const isChecked = selectedWords[id];

                if (!isChecked) {
                    return false;
                }

                return dispatch(deleteWord({
                    categoryId: categoryId,
                    wordId: id
                }))
            })
        }
    }

    const handlePracticeClick = () => {
        dispatch(setCategoryId(categoryId));

        history.push('/practice');
    }

    if (!vocabularySelector.categories[categoryId]) {
        return <Redirect to="/" />
    }

    return (
        <Container>
            <Wrapper>
                <StyledButton onClick={handlePracticeClick} backgroundColor="normal" width="small">Practice</StyledButton>
                <StyledButton href={`/category/${categoryId}/add`} backgroundColor="normal" width="small">Add word</StyledButton>
                <StyledButton onClick={handleDeleteSelected} backgroundColor="delete" width="small">Delete selected</StyledButton>
                <StyledButton onClick={() => onCategoryDeleteclick(categoryId)} backgroundColor="delete" width="small">Delete category</StyledButton>
            </Wrapper>
            <WordsTable categoryId={categoryId} onWordCheckClick={handleCheckClick} onWordDeleteClick={handleWordDelete} words={vocabularySelector.categories[categoryId].words} />
        </Container>
    );
};

export default FullWords;