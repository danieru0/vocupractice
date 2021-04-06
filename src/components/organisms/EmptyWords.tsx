import React from 'react';
import styled from 'styled-components';

import Button from '../atoms/Button';

interface IEmptyWords {
    categoryId: string;
    onCategoryDeleteclick: (categoryId: string) => void;
}

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

const EmptyWords = ({categoryId, onCategoryDeleteclick}: IEmptyWords) => {
    return (
        <Container>
            <StyledButton href={`/category/${categoryId}/add`} backgroundColor="normal" width="small">Add word</StyledButton>
            <StyledButton onClick={() => onCategoryDeleteclick(categoryId)} backgroundColor="delete" width="small">Delete category</StyledButton>
        </Container>
    );
};

export default EmptyWords;