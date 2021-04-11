import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import { Helmet } from "react-helmet";

import generateRandomId from '../helpers/generateRandomId';
import findWordById from '../helpers/findWordById';

import { selectVocabulary, createWord, updateWord } from '../features/vocabulary/vocabularySlice';

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

interface editDataInterface {
    id?: string;
    word?: string;
    translation?: string;
    reading?: string;
}

const WordForm = ({type}: IWordForm) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const vocabularySelector = useSelector(selectVocabulary);
    const { wordId, categoryId } = useParams<{ categoryId: string, wordId: string }>();
    const [ editData, setEditData ] = useState<editDataInterface>({
        id: undefined,
        word: undefined,
        translation: undefined,
        reading: undefined
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>, word: string, translation: string, reading: string | undefined) => {
        if (type === 'add') {
            dispatch(createWord({
                categoryId: categoryId,
                word: {
                    id: generateRandomId(),
                    word: word,
                    translation: translation,
                    reading: reading
                }
            }))
        } else {
            dispatch(updateWord({
                categoryId: categoryId,
                word: {
                    id: editData.id!,
                    word: word,
                    translation: translation,
                    reading: reading
                }
            }))
        }

        history.push(`/category/${categoryId}`);
    }

    useEffect(() => {
        if (type === 'edit' && vocabularySelector.categories[categoryId]) {
            const word = findWordById(vocabularySelector.categories[categoryId], wordId);

            setEditData(word[0]);
        }
    }, [type, vocabularySelector.categories, wordId, categoryId]);

    if (type === 'add' && !vocabularySelector.categories[categoryId]) {
        return <Redirect to="/" />
    }

    if (type === 'edit' && ( !vocabularySelector.categories[categoryId] || findWordById(vocabularySelector.categories[categoryId], wordId).length === 0) ) {
        return <Redirect to="/" />
    }

    return (
        <Container>
            <Helmet>
                <title>{type.charAt(0).toUpperCase() + type.slice(1)} word - Vocupractice</title>
            </Helmet>
            <Title title={`${type.toUpperCase()} word`} />
            {
                type === 'add' ? (
                    <AddEditWordForm onSubmit={handleSubmit} type={type}/>
                ) : (
                    <AddEditWordForm {...editData} onSubmit={handleSubmit} type={type}/>
                )
            }
        </Container>
    );
};

export default WordForm;