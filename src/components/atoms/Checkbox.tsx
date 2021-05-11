import React from 'react';
import styled from 'styled-components';

interface ICheckbox {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    title?: string;
    checked?: boolean;
}

const Container = styled.label`
    color: ${({theme}) => theme.fontColor};
    font-family: ${({theme}) => theme.primaryFont};
    text-transform: uppercase;
    font-size: 1.1em;
` 

const Text = styled.span`
    margin-left: 5px;
`

const Input = styled.input`
    transform: scale(1.7);
`

const Checkbox = ({onChange, label, checked, title}: ICheckbox) => {
    if (label) {       
        return (
            <Container title={title}>
                <Input checked={checked} onChange={onChange} type="checkbox" />
                <Text>{label}</Text>
            </Container>
        )
    } else {        
        return (
            <Input checked={checked} onChange={onChange} type="checkbox" />
        );
    }

};

export default Checkbox;