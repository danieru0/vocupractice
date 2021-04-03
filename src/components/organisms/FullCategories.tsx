import React from 'react';
import styled from 'styled-components';

import Button from '../atoms/Button';
import CategoryBlock from '../atoms/CategoryBlock';

const Container = styled.div`
    width: 560px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 100px;
`

const Wrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 20px;
    grid-gap: 20px;
`

const FullCategories = () => {
    return (
        <Container>
            <Button backgroundColor="normal" width="small" onClick={() => alert('yo')}>Add category</Button>
            <Wrapper>
            <CategoryBlock href="/" name="a" />
            <CategoryBlock href="/" name="b" />
            <CategoryBlock href="/" name="c" />
            <CategoryBlock href="/" name="d" />
            <CategoryBlock href="/" name="Wei" />
            <CategoryBlock href="/" name="fi" />
            </Wrapper>
        </Container>
    );
};

export default FullCategories;