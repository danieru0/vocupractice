import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

interface ICategoryBlocks {
    name: string;
    href: string;
}

const StyledLink = styled(Link)`
    text-decoration: none;
    width: 120px;
    height: 120px;
    border: 2px solid ${({theme}) => theme.categoryBorder};
    color: ${({theme}) => theme.fontColor};
    font-family: ${({theme}) => theme.secondaryFont};
    font-size: 1.1em;
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background .3s;
    word-break: break-word;
    overflow-wrap: break-word;
    text-align: center;
    padding: 5px;

    &:hover {
        background: ${({theme}) => darken(0.020, theme.primary)};
    }

    @media (max-width: 400px) {
        margin: auto;
    }
`

const CategoryBlock = ({name, href}: ICategoryBlocks) => {
    return (
        <StyledLink to={href}>
            {name}
        </StyledLink>
    );
};

export default CategoryBlock;