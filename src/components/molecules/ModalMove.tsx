import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { selectVocabulary, moveWord } from '../../features/vocabulary/vocabularySlice';
import { selectModal, setModalActiveState, setWord } from '../../features/modal/modalSlice';

import Button from '../atoms/Button';

const Container = styled.div`
    width: 600px;
    height: 250px;
    background: ${({theme}) => theme.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 5px 5px 20px 0px #000;
`

const Title = styled.span`
    font-family: ${({theme}) => theme.primaryFont};
    color: ${({theme}) => theme.fontColor};
    font-size: 1.6em;
    text-transform: uppercase;
    user-select: none;
`

const SelectInput = styled.select`
    width: 60%;
    height: 40px;
    margin-top: 10px;
`

const SelectOption = styled.option``

const Wrapper = styled.div`
    margin-top: 30px;
`

const StyledButton = styled(Button)`
    margin: 0px 5px;
    font-size: 1.2em;
`

const ModalMove = () => {
    const dispatch = useDispatch();
    const vocabularySelector = useSelector(selectVocabulary);
    const modalSelector = useSelector(selectModal);
    const [selectValue, setSelectValue] = useState('');

    useEffect(() => {
        setSelectValue(modalSelector.currentCategoryId);
    }, [modalSelector.currentCategoryId]);

    const handleSelectchange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectValue(e.target.value);
    }

    const handleMoveClick = () => {
        dispatch(moveWord({
            categoryIdFrom: modalSelector.currentCategoryId,
            categoryIdTo: selectValue,
            word: modalSelector.word!
        }));
        dispatch(setWord(null));
        dispatch(setModalActiveState({
            active: false,
            type: '',
            currentCategoryId: ''
        }));
    }


    const handleCloseClick = () => {
        dispatch(setWord(null));
        dispatch(setModalActiveState({
            active: false,
            type: '',
            currentCategoryId: ''
        }));
    }

    return (
        <Container>
            <Title>Select category</Title>
            <SelectInput value={selectValue} onChange={handleSelectchange}>
                {
                    Object.keys(vocabularySelector.categories).map((item) => {
                        const category = vocabularySelector.categories[item];

                        if (category.name === 'important') return false;

                        return (
                            <SelectOption value={category.id} key={category.id}>{category.name}</SelectOption>
                        )
                    })
                }
            </SelectInput>
            <Wrapper>
                <StyledButton onClick={handleMoveClick} backgroundColor="normal" width="small">Move</StyledButton>
                <StyledButton onClick={handleCloseClick} backgroundColor="normal" width="small">Close</StyledButton>
            </Wrapper>
        </Container>
    );
};

export default ModalMove;