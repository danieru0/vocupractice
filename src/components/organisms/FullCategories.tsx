import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { selectVocubulary } from '../../features/vocubulary/vocubularySlice';

import Button from '../atoms/Button';
import CategoryBlock from '../atoms/CategoryBlock';

const Container = styled.div`
    width: 560px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: auto;
    margin-top: auto;

    @media (max-width: 600px) {
        width: 90%;
    }

    @media (max-width: 400px) {
        justify-content: center;
        align-items: center;
    }
`

const Wrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 20px;
    grid-gap: 20px;

    @media (max-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 400px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const StyledButton = styled(Button)`
    @media (max-width: 360px) {
        padding: 0;
        width: 200px;
    }
`

const FullCategories = () => {
    const vocubularySelector = useSelector(selectVocubulary);

    return (
        <Container>
            <StyledButton href="/addcategory" backgroundColor="normal" width="small">Add category</StyledButton>
            <Wrapper>
                {
                    Object.keys(vocubularySelector.categories).map((item) => {
                        const category = vocubularySelector.categories[item];

                        return (
                            <CategoryBlock key={category.id} href={`/category/${category.id}`} name={category.name} />
                        )
                    })
                }
            </Wrapper>
        </Container>
    );
};

export default FullCategories;