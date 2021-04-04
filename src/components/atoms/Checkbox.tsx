import React from 'react';
import styled from 'styled-components';

interface ICheckbox {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Container = styled.input`
    transform: scale(1.7);
`

const Checkbox = ({onChange}: ICheckbox) => {
    return (
        <Container onChange={onChange} type="checkbox">
            
        </Container>
    );
};

export default Checkbox;