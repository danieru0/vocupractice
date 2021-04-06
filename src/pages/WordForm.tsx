import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Redirect, useHistory } from 'react-router-dom';

import generateRandomId from '../helpers/generateRandomId';

import { selectVocubulary, createWord } from '../features/vocubulary/vocubularySlice';

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
    const dispatch = useDispatch();
    const history = useHistory();
    const vocubularySelector = useSelector(selectVocubulary);
    const { id } = useParams<{ id: string }>();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>, word: string, translation: string, reading: string | undefined) => {
        if (type === 'add') {
            dispatch(createWord({
                categoryId: id,
                word: {
                    id: generateRandomId(),
                    word: word,
                    translation: translation,
                    reading: reading
                }
            }))
        }

        history.push(`/category/${id}`);
    }

    if (!vocubularySelector.categories[id]) {
        return <Redirect to="/" />
    }

    return (
        <Container>
            <Title title={`${type.toUpperCase()} word`} />
            <AddEditWordForm onSubmit={handleSubmit} type={type}/>
        </Container>
    );
};

export default WordForm;