import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../atoms/Button';
import Input from '../atoms/Input';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: auto;
    margin-bottom: auto;
    align-items: center;
`

const Word = styled.span`
    font-family: ${({theme}) => theme.secondaryFont};
    color: ${({theme}) => theme.fontColor};
    font-size: 3em;
    text-align: center;
`

const Wrapper = styled.div`
    display: flex;
    margin-top: 10px;
`

const StyledButton = styled(Button)`
    font-size: 0.7em;
    margin: 0px 5px;
`

const Vocupractice = () => {
    const [answerValue, setAnswerValue] = useState('');

    const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAnswerValue(e.target.value);
    }

    const handleAnswerCheck = (e: React.KeyboardEvent<HTMLInputElement>) => {

    }

    return (
        <Container>
            <Word>食べる</Word>
            <Input onKeyDown={handleAnswerCheck} onChange={handleAnswerChange} value={answerValue} />
            <Wrapper>
                <StyledButton backgroundColor="normal" width="small">Check</StyledButton>
                <StyledButton backgroundColor="normal" width="small">Answer</StyledButton>
                <StyledButton backgroundColor="normal" width="small">Next</StyledButton>
            </Wrapper>
        </Container>
    );
};

export default Vocupractice;