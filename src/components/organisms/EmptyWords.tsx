import React from 'react';
import styled from 'styled-components';

import Button from '../atoms/Button';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: auto;
    margin-top: auto;
`

const StyledButton = styled(Button)`
    margin: 0px 10px;
`

const EmptyWords = () => {

    const handleDeleteClick = () => {

    }

    return (
        <Container>
            <StyledButton href="/category/1/add" backgroundColor="normal" width="small">Add word</StyledButton>
            <StyledButton onClick={handleDeleteClick} backgroundColor="delete" width="small">Delete category</StyledButton>
        </Container>
    );
};

export default EmptyWords;