import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

type fontColor = 'edit' | 'delete';

interface IButtonIcon {
    fontColor: fontColor;
    iconType: any;
    onClick?: () => void;
    href?: string;
}

interface ContainerProps {
    fontColor: fontColor;
}

const ContainerButton = styled.button<ContainerProps>`
    color: ${({theme, fontColor}) => fontColor === 'edit' ? theme.editColor : theme.deleteColor};
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    width: 25px;
    height: 25px;
`

const ContainerLink = styled(Link)<ContainerProps>`
    color: ${({theme, fontColor}) => fontColor === 'edit' ? theme.editColor : theme.deleteColor};
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    width: 25px;
    height: 25px;
`

const ButtonIcon = ({fontColor, iconType, onClick, href}: IButtonIcon) => {
    if (href) {
        return (
            <ContainerLink to={href} fontColor={fontColor}>
                <FontAwesomeIcon icon={iconType} />
            </ContainerLink>
        )
    } else {
        return (
            <ContainerButton onClick={onClick} fontColor={fontColor}>
                <FontAwesomeIcon icon={iconType} />
            </ContainerButton>
        );
    }
};

export default ButtonIcon;