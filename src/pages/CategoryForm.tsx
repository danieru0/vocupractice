import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { selectVocubulary, createCategory } from '../features/vocubulary/vocubularySlice';

import Title from '../components/molecules/Title';
import AddCategory from '../components/molecules/AddCategory';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 1;
`

const CategoryForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const vocubularySelector = useSelector(selectVocubulary);

    const handleSubmit = (categoryName: string) => {
        if (vocubularySelector.categories[categoryName]) {
            alert('Category already exists');
            return false;
        }

        dispatch(createCategory(categoryName));
        history.push('/');
    }

    return (
        <Container>
            <Title title="Add category" />
            <AddCategory onSubmit={handleSubmit} />
        </Container>
    );
};

export default CategoryForm;