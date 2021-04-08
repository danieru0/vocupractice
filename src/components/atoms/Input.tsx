import React from 'react';
import styled from 'styled-components';

interface IInput {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    value: string;
    labelText?: string;
    placeholder?: string;
    [key: string]: any;
}

const Container = styled.label`
    display: flex;
    flex-direction: column;
    color: ${({theme}) => theme.fontColor};
    font-family: ${({theme}) => theme.primaryFont};
    text-transform: uppercase;
    font-size: 1.4em;
`

const LabelText = styled.span`
    padding-left: 5px;
`

const ContainerInput = styled.input`
    background: ${({theme}) => theme.inputBackground};
    color: ${({theme}) => theme.fontColor};
    font-family: ${({theme}) => theme.secondaryFont};
    border: none;
    width: 280px;
    height: 50px;
    padding: 0px 10px;
    font-size: 1em;
    outline: none;
    
    &::placeholder {
        color: ${({theme}) => theme.fontColorSecondary};
        font-style: italic;
        font-size: 0.6em;
    }
`

const Input = ({onChange, onKeyDown, value, labelText, placeholder, ...props}: IInput) => {
    return (
        <Container {...props}>
            { labelText && <LabelText>{labelText}</LabelText> }
            <ContainerInput placeholder={placeholder} value={value} onKeyDown={onKeyDown} onChange={onChange} />
        </Container>
    );
};

export default Input;