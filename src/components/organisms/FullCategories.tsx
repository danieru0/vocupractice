import React from 'react';
import styled from 'styled-components';

import Button from '../atoms/Button';
import CategoryBlock from '../atoms/CategoryBlock';

const Container = styled.div`
    width: 560px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: auto;
    margin-top: auto;
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
            <Button href="/addcategory" backgroundColor="normal" width="small">Add category</Button>
            <Wrapper>
                <CategoryBlock href="/category/1" name="a" />
                <CategoryBlock href="/" name="b" />
                <CategoryBlock href="/" name="c" />
                <CategoryBlock href="/" name="d" />
                <CategoryBlock href="/" name="Wei" />
            </Wrapper>
        </Container>
    );
};

export default FullCategories;