import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme/theme';
import { darken } from 'polished';
import { Link } from 'react-router-dom';

type backgroundColor = 'import' | 'export' | 'normal';
type width = 'small' | 'middle' | 'big';

interface IButton {
    backgroundColor: backgroundColor;
    width: width;
    children: string;
    href?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
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

const ContainerButton = styled.button<ContainerProps>`
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

const ContainerLink = styled(Link)<ContainerProps>`
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
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background: ${({backgroundColor}) => darken("0.050", handleColorType(backgroundColor))}
    }
`

const Button = ({backgroundColor, children, width, onClick, href, ...props}: IButton) => {
    if (href) {
        return (
            <ContainerLink backgroundColor={backgroundColor} width={width} to={href} {...props}>
                {children}
            </ContainerLink>
        )
    } else {
        return (
            <ContainerButton onClick={onClick} backgroundColor={backgroundColor} width={width} {...props}>
                {children}
            </ContainerButton>
        );
    }
};

export default Button;