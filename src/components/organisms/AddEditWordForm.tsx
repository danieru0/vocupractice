import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Button from '../atoms/Button';
import Input from '../atoms/Input';

type formType = 'edit' | 'add';

interface IAddEditWordForm {
    type: formType;
    id?: string;
    word?: string;
    translation?: string;
    reading?: string;
    onSubmit: (e: React.FormEvent<HTMLFormElement>, word: string, translation: string, reading: string | undefined) => void;
}

const Container = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: auto;
    margin-bottom: auto;
    height: 325px;
    justify-content: space-between;
    align-items: center;
`

const AddEditWordForm = ({type, id, word, translation, reading, onSubmit}: IAddEditWordForm) => {
    const [wordValue, setWordValue] = useState('');
    const [translationValue, setTranslationValue] = useState('');
    const [readingValue, setReadingValue] = useState('');

    useEffect(() => {
        if (id) {
            setWordValue(word!);
            setTranslationValue(translation!);
            setReadingValue(reading!);
        }
    }, [id, word, translation, reading]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (wordValue && translationValue) {
            if (wordValue.trim().length !== 0 && translationValue.trim().length !== 0) {
                onSubmit(e, wordValue, translationValue, readingValue);
            }  
        }
    }

    return (
        <Container onSubmit={handleSubmit}>
            <Input value={wordValue} labelText="Word" onChange={(e) => setWordValue(e.target.value)} />
            <Input value={translationValue} labelText="Translation" onChange={(e) => setTranslationValue(e.target.value)} />
            <Input value={readingValue} placeholder="Leave empty if not needed" labelText="Reading" onChange={(e) => setReadingValue(e.target.value)} />
            <Button backgroundColor="normal" width="small">{`${type} word`}</Button>
        </Container>
    );
};

export default AddEditWordForm;