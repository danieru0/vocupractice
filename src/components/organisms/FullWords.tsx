import React from 'react';
import styled from 'styled-components';

import Button from '../atoms/Button';
import WordsTable from '../molecules/WordsTable';

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

const FullWords = () => {
    return (
        <Container>
            <Wrapper>
                <StyledButton href="/practice/1" backgroundColor="normal" width="small">Practice</StyledButton>
                <StyledButton href="/category/1/add" backgroundColor="normal" width="small">Add word</StyledButton>
                <StyledButton onClick={() => alert('delete selected')} backgroundColor="delete" width="small">Delete selected</StyledButton>
                <StyledButton onClick={() => alert('delete category')} backgroundColor="delete" width="small">Delete category</StyledButton>
            </Wrapper>
            <WordsTable />
        </Container>
    );
};

export default FullWords;