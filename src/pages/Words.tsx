import React from 'react';
import styled from 'styled-components';
import { useParams, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectVocubulary } from '../features/vocubulary/vocubularySlice';

import Title from '../components/molecules/Title';
import FullWords from '../components/organisms/FullWords'
import EmptyWords from '../components/organisms/EmptyWords';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 1;
`

const Words = () => {
    const vocubularySelector = useSelector(selectVocubulary);
    const { id } = useParams<{ id: string }>();

    if (!vocubularySelector.categories[id]) {
        return <Redirect to="/" />
    }

    return (
        <Container>
            <Title title={`Category / ${vocubularySelector.categories[id].name}`} />
            {
                vocubularySelector.categories[id].words.length > 0 ? <FullWords /> : <EmptyWords categoryId={id} />
            }
        </Container>
    );
};

export default Words;