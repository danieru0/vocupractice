import React from 'react';
import styled from 'styled-components';
import { useParams, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectVocabulary, deleteCategory } from '../features/vocabulary/vocabularySlice';

import Title from '../components/molecules/Title';
import FullWords from '../components/organisms/FullWords'
import EmptyWords from '../components/organisms/EmptyWords';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 1;
`

const Words = () => {
    const dispatch = useDispatch();
    const vocabularySelector = useSelector(selectVocabulary);
    const { id } = useParams<{ id: string }>();

    const handleCategoryDelete = (categoryId: string) => {
        if (window.confirm('Are you sure you want to delete this category?')) {
            dispatch(deleteCategory(categoryId));
        }
    }

    if (!vocabularySelector.categories[id]) {
        return <Redirect to="/" />
    }

    return (
        <Container>
            <Title title={`Category / ${vocabularySelector.categories[id].name}`} />
            {
                vocabularySelector.categories[id].words.length > 0 ? <FullWords onCategoryDeleteclick={handleCategoryDelete} categoryId={id} /> : <EmptyWords onCategoryDeleteclick={handleCategoryDelete} categoryId={id} />
            }
        </Container>
    );
};

export default Words;