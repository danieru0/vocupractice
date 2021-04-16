import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

import PageTitle from '../atoms/PageTitle';

interface ITitle {
    title?: string;
    length?: number;
}

const Container = styled.div`
    padding-bottom: 15px;
    display: flex;
    align-items: center;

    @media (max-width: 1160px) {
        padding-bottom: 20px;
    }
`

const WordsLengthContainer = styled.div`
    background: ${({theme}) => darken(0.05, theme.secondary)};
    padding: 0px 5px;
    border-radius: 10px;
    margin-left: 8px;
`

const WordsLength = styled.div`
    font-size: 2em;
    font-family: ${({theme}) => theme.primaryFont};
    color: ${({theme}) => theme.fontColor};
    user-select: none;
`

const Title = ({title, length}: ITitle) => {
    return (
        <Container>
            <PageTitle size="small">{title ? title : `\u00a0\u00a0`}</PageTitle>
            { length && 
                <WordsLengthContainer>
                    <WordsLength>{length}</WordsLength> 
                </WordsLengthContainer>
            }
        </Container>
    );
};

export default Title;