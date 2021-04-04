import React from 'react';
import styled from 'styled-components';

type size = 'small' | 'big';

interface IPageTitle {
    size: size;
    children: string;
    [key: string]: any;
}

interface TitleProps {
    size: size;
}

const Title = styled.span<TitleProps>`
    font-size: ${({size}) => size === 'small' ? '2em' : '3em'};
    color: ${({theme}) => theme.fontColor};
    font-family: ${({theme}) => theme.primaryFont};
    padding: 0;
    margin: 0;
    text-transform: uppercase;
    user-select: none;
`

const PageTitle = ({size, children, ...props}: IPageTitle) => {
    return (
        <Title size={size} {...props}>
            {children}
        </Title>
    );
};

export default PageTitle;