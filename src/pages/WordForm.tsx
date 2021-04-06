import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Redirect, useHistory } from 'react-router-dom';

import generateRandomId from '../helpers/generateRandomId';
import findWordById from '../helpers/findWordById';

import { selectVocubulary, createWord, updateWord } from '../features/vocubulary/vocubularySlice';

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
    const vocubularySelector = useSelector(selectVocubulary);
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
        if (type === 'edit' && vocubularySelector.categories[categoryId]) {
            const word = findWordById(vocubularySelector.categories[categoryId], wordId);

            setEditData(word[0]);
        }
    }, [type, vocubularySelector.categories, wordId, categoryId]);

    if (type === 'add' && !vocubularySelector.categories[categoryId]) {
        return <Redirect to="/" />
    }

    if (type === 'edit' && ( !vocubularySelector.categories[categoryId] || findWordById(vocubularySelector.categories[categoryId], wordId).length === 0) ) {
        return <Redirect to="/" />
    }

    return (
        <Container>
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