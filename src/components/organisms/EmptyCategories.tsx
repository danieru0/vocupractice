import React from 'react';
import styled from 'styled-components';

import Button from '../atoms/Button';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const EmptyCategories = () => {
    return (
        <Container>
            <Button backgroundColor="normal" width="small" onClick={() => alert('yo')}>Add category</Button>
        </Container>
    );
};

export default EmptyCategories;