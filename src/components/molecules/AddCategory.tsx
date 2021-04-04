import React, { useState } from 'react';
import styled from 'styled-components';

import Input from '../atoms/Input';
import Button from '../atoms/Button';

const Container = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: auto;
    margin-bottom: auto;
    height: 140px;
    justify-content: space-between;
    align-items: center;
`

const AddCategory = () => {
    const [categoryName, setCategoryName] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCategoryName(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(categoryName);
    }

    return (
        <Container onSubmit={handleSubmit}>
            <Input labelText="Category name" value={categoryName} onChange={handleInputChange} />
            <Button backgroundColor="normal" width="small">Add category</Button>
        </Container>
    );
};

export default AddCategory;