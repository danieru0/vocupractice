import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

import { Words } from '../vocabulary/vocabularySlice';

interface ModalState {
    word: Words | null | undefined,
    active: boolean;
    type: string;
    currentCategoryId: string;
}

export const initialState: ModalState = {
    word: null,
    currentCategoryId: '',
    active: false,
    type: ''
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModalActiveState: (state, action: PayloadAction<{active: boolean, type: string, currentCategoryId: string}>) => {
            const { active, type, currentCategoryId } = action.payload;
            state.active = active;
            state.type = type;
            state.currentCategoryId = currentCategoryId;
        },
        setWord: (state, action: PayloadAction<Words | null | undefined>) => {
            state.word = action.payload;
        }
    }
})

export const { setModalActiveState, setWord } = modalSlice.actions;

export const selectModal = (state: RootState) => state.modal;

export default modalSlice.reducer;