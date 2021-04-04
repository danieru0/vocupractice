import React from 'react';
import styled from 'styled-components';

import Title from '../components/molecules/Title';
import AddEditWordForm from '../components/organisms/AddEditWordForm';

type formType = 'edit' | 'add';

interface IWordForm {
    type: formType;
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 1;
`

const WordForm = ({type}: IWordForm) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>, word: string, translation: string, reading: string | undefined) => {

    }

    return (
        <Container>
            <Title title={`${type.toUpperCase()} word`} />
            <AddEditWordForm word="ala" onSubmit={handleSubmit} type={type}/>
        </Container>
    );
};

export default WordForm;