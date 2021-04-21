import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Helmet } from "react-helmet";
import { useSelector } from 'react-redux';

import { selectVocupractice } from '../features/vocupractice/vocupracticeSlice';
import { selectVocabulary } from '../features/vocabulary/vocabularySlice';

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
    const vocupracticeSelector = useSelector(selectVocupractice);
    const vocabularySelector = useSelector(selectVocabulary);
    const [practiceTitle, setPracticeTitle] = useState('');

    useEffect(() => {
        if (vocupracticeSelector.categoryId) {
            setPracticeTitle(`/ ${vocabularySelector.categories[vocupracticeSelector.categoryId].name}`);
        } else {
            setPracticeTitle('');
        }

        return () => setPracticeTitle('');
    }, [vocupracticeSelector.categoryId, vocabularySelector.categories]);

    return (
        <Container>
            <Helmet>
                <title>Practice - Vocupractice</title>
            </Helmet>
            <Title title={`Practice ${practiceTitle}`}/>
            <Vocupractice />
        </Container>
    );
};

export default Practice;