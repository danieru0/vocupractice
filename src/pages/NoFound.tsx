import React from 'react';
import styled from 'styled-components';
import { Helmet } from "react-helmet";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 1;
`

const Message = styled.span`
    font-family: ${({theme}) => theme.primaryFont};
    color: ${({theme}) => theme.fontColor};
    font-size: 3em;
    user-select: none;
`

const NoFound = () => {
    return (
        <Container>
            <Helmet>
                <title>404 - Vocupractice</title>
            </Helmet>
            <Message>Hey! It looks like you're lost!</Message>
            <Message>Click on vocupractice logo to go back :)</Message>
        </Container>
    );
};

export default NoFound;