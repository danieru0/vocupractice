import React from 'react';
import styled from 'styled-components';
import { Helmet } from "react-helmet";

import Title from '../components/molecules/Title';
import Vocupractice from '../components/organisms/Vocupractice';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 1;
    padding-top: 30px;
`

const Practice = () => {
    return (
        <Container>
            <Helmet>
                <title>Practice - Vocupractice</title>
            </Helmet>
            <Title title="Practice / verbs" />
            <Vocupractice />
        </Container>
    );
};

export default Practice;