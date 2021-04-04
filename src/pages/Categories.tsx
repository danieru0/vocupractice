import React from 'react';
import styled from 'styled-components';

import EmptyCategories from '../components/organisms/EmptyCategories';
import FullCategories from '../components/organisms/FullCategories';
import Title from '../components/molecules/Title';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 1;
`

const Categories = () => {
    const data = true;

    return (
        <Container>
            <Title />
            {
                data ? <FullCategories /> : <EmptyCategories />
            }
        </Container>
    )

};

export default Categories;