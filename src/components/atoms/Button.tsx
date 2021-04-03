import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme/theme';
import { darken } from 'polished';

type backgroundColor = 'import' | 'export' | 'normal';
type width = 'small' | 'middle' | 'big';

interface IButton {
    backgroundColor: backgroundColor;
    width: width;
    children: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    [key: string]: any;
}

interface ContainerProps {
    backgroundColor: backgroundColor;
    width: width;
}

const handleColorType = (color: backgroundColor) => {
    switch(color) {
        case "import":
            return theme.importColor;
        case "export":
            return theme.exportColor;
        case "normal":
            return theme.secondary;
        default: return theme.secondary;
    }
}

const handleWidthType = (width: width) => {
    switch(width) {
        case 'small':
            return '20px';
        case 'middle':
            return '40px';
        case 'big':
            return '50px';
        default: return '20px';
    }
}

const Container = styled.button<ContainerProps>`
    color: ${({theme}) => theme.fontColor};
    font-family: ${({theme}) => theme.secondaryFont};
    font-size: 1.4em;
    border: 1px solid ${({theme}) => theme.buttonBorder};
    background: ${({backgroundColor}) => handleColorType(backgroundColor)};
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 300;
    height: 45px;
    padding-left: ${({width}) => handleWidthType(width)};
    padding-right: ${({width}) => handleWidthType(width)};
    outline: none;
    transition: background .3s;

    &:hover {
        background: ${({backgroundColor}) => darken("0.050", handleColorType(backgroundColor))}
    }
`

const Button = ({backgroundColor, children, width, onClick, ...props}: IButton) => {
    return (
        <Container onClick={onClick} backgroundColor={backgroundColor} width={width} {...props}>
            {children}
        </Container>
    );
};

export default Button;