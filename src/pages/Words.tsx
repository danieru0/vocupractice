import React from 'react';
import styled from 'styled-components';

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
    const data = true;

    return (
        <Container>
            <Title title="Category / verbs" />
            {
                data ? <FullWords /> : <EmptyWords />
            }
        </Container>
    );
};

export default Words;