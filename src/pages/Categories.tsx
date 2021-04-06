import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { selectVocubulary } from '../features/vocubulary/vocubularySlice';

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
    const vocubularySelector = useSelector(selectVocubulary);

    return (
        <Container>
            <Title />
            {
                Object.keys(vocubularySelector.categories).length > 0 ? <FullCategories /> : <EmptyCategories />
            }
        </Container>
    )

};

export default Categories;