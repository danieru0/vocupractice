import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Helmet } from "react-helmet";

import { selectVocabulary } from '../features/vocabulary/vocabularySlice';

import EmptyCategories from '../components/organisms/EmptyCategories';
import FullCategories from '../components/organisms/FullCategories';
import Title from '../components/molecules/Title';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 1;
`

const Categories = () => {
    const vocabularySelector = useSelector(selectVocabulary);

    return (
        <Container>
            <Helmet>
                <title>Vocupractice</title>
            </Helmet>
            <Title />
            {
                Object.keys(vocabularySelector.categories).length > 0 ? <FullCategories /> : <EmptyCategories />
            }
        </Container>
    )

};

export default Categories;