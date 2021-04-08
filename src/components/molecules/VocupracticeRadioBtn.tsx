import React from 'react';
import styled from 'styled-components';

import Radio from '../atoms/Radio';

interface IVocupracticeRadioBtn {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    text: string;
    checked?: boolean;
    [key: string]: any;
}

const Container = styled.label`
    color: ${({theme}) => theme.fontColor};
    font-family: ${({theme}) => theme.primaryFont};
    text-transform: uppercase;
    font-size: 1.1em;
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledRadio = styled(Radio)`
    position: relative;
    bottom: 1px;
`

const Text = styled.span`
    margin-left: 5px;
`

const VocupracticeRadioBtn = ({onChange, name, checked, text, ...props}: IVocupracticeRadioBtn) => {
    return (
        <Container {...props}>
            <StyledRadio checked={checked} onChange={onChange} name={name} />
            <Text>{text}</Text>
        </Container>
    );
};

export default VocupracticeRadioBtn;