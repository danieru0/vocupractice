import React from 'react';
import styled from 'styled-components';

import Button from '../atoms/Button';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: auto;
    margin-top: auto;
`

const EmptyCategories = () => {
    return (
        <Container>
            <Button href="/addcategory" backgroundColor="normal" width="small">Add category</Button>
        </Container>
    );
};

export default EmptyCategories;