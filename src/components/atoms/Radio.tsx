import React from 'react';
import styled from 'styled-components';

interface IRadio {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    checked?: boolean;
    [key: string]: any;
}

const Container = styled.input`
    transform: scale(1.1);
    margin: 0;
`

const Radio = ({onChange, name, checked, ...props}: IRadio) => {
    return (
        <Container checked={checked} type="radio" name={name} onChange={onChange} {...props} />
    );
};

export default Radio;