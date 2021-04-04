import React from 'react';
import styled from 'styled-components';

import Title from '../components/molecules/Title';
import AddCategory from '../components/molecules/AddCategory';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 1;
`

const CategoryForm = () => {
    return (
        <Container>
            <Title title="add category" />
            <AddCategory />
        </Container>
    );
};

export default CategoryForm;