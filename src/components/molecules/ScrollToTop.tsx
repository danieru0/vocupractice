import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { darken } from 'polished';

import ButtonIcon from '../atoms/ButtonIcon';

interface ContainerProps {
    shouldShow: boolean;
}

const Container = styled.div<ContainerProps>`
    width: 50px;
    height: 50px;
    position: fixed;
    right: 20%;
    bottom: 60px;
    opacity: 0;
    visibility: 0;
    z-index: 99;
    transition: opacity .3s ease-in-out;
    background: ${({theme}) => theme.secondary};
    border: 1px solid ${({theme}) => theme.buttonBorder};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background .3s;

    ${({shouldShow}) => shouldShow && css`
        opacity: 1;
        visibility: 1;
    `}

    &:hover {
        background: ${({theme}) => darken("0.050", theme.secondary)};
    }

    @media (max-width: 1750px) {
        right: 60px;
    }
`

const ScrollToTop = () => {
    const [shouldShowButton, setShouldShowButton] = useState(false);

    const handleScroll = () => {
        if (window.pageYOffset >= 600) {
            setShouldShowButton(true);
        } else {
            setShouldShowButton(false);
        }
    }

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        document.addEventListener('scroll', handleScroll);

        return () => document.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <Container shouldShow={shouldShowButton}>
            <ButtonIcon onClick={handleClick} fontSize="1.8em" iconType="arrow-up" fontColor="white" />
        </Container>
    );
};

export default ScrollToTop;