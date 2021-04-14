import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IInput {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    value: string;
    labelText?: string;
    placeholder?: string;
    iconType?: any;
    [key: string]: any;
}

interface ContainerProps {
    label?: string;
}

interface InputProps {
    iconType?: string;
}

const Container = styled.label<ContainerProps>`
    display: flex;
    flex-direction: column;
    color: ${({theme}) => theme.fontColor};
    font-family: ${({theme}) => theme.primaryFont};
    text-transform: uppercase;
    font-size: 1.4em;
    width: 280px;
    height: ${({label}) => label ? '82px' : '50px'};
    position: relative;
`

const LabelText = styled.span`
    padding-left: 5px;
`

const ContainerInput = styled.input<InputProps>`
    background: ${({theme}) => theme.inputBackground};
    color: ${({theme}) => theme.fontColor};
    font-family: ${({theme}) => theme.secondaryFont};
    border: none;
    width: 100%;
    height: 100%;
    padding: ${({iconType}) => iconType ? '0px 60px' : '0px 10px'};
    font-size: 1em;
    outline: none;
    
    &::placeholder {
        color: ${({theme}) => theme.fontColorSecondary};
        font-style: italic;
        font-size: 0.6em;
    }
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    position: absolute;
    left: 15px;
    top: 12px;
`

const Input = forwardRef<HTMLInputElement, IInput>((props, ref) => {
    const { onChange, onKeyDown, value, labelText, placeholder, iconType, ...restProps } = props;
    return (
        <Container label={labelText} {...restProps}>
            { labelText && <LabelText>{labelText}</LabelText> }
            { iconType && <StyledFontAwesomeIcon icon={iconType} /> }
            <ContainerInput iconType={iconType} ref={ref} placeholder={placeholder} value={value} onKeyDown={onKeyDown} onChange={onChange} />
        </Container>
    )
})

export default Input;