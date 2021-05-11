import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { selectModal, setModalActiveState, setWord } from '../../features/modal/modalSlice';

import ModalMove from '../molecules/ModalMove';

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.3);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalContainer = () => {
    const dispatch = useDispatch();
    const modalSelector = useSelector(selectModal);

    const renderModal = (type: string) => {
        switch(modalSelector.type) {
            case 'move':
                return <ModalMove />
            default: return null;
        }
    }

    const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement;

        if (target.id === 'modal-outside') {
            dispatch(setModalActiveState({
                active: false,
                currentCategoryId: '',
                type: ''
            }));
            dispatch(setWord(null));
        }
    }

    if (!modalSelector.active) {
        return null;
    }

    return (
        <Container id="modal-outside" onClick={handleOutsideClick}>
            {
                renderModal(modalSelector.type)
            }
        </Container>
    );
};

export default ModalContainer;