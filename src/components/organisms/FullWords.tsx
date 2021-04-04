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
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10px;
`

const FullWords = () => {
    return (
        <Container>
            <Wrapper>
                <Button href="/practice/1" backgroundColor="normal" width="small">Practice</Button>
                <Button href="/category/1/add" backgroundColor="normal" width="small">Add word</Button>
                <Button onClick={() => alert('delete selected')} backgroundColor="delete" width="small">Delete selected</Button>
                <Button onClick={() => alert('delete category')} backgroundColor="delete" width="small">Delete category</Button>
            </Wrapper>
            <WordsTable />
        </Container>
    );
};

export default FullWords;