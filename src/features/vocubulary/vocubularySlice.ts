import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

import generateRandomId from '../../helpers/generateRandomId';

export interface Words {
    id: string;
    word: string;
    translation: string;
    reading?: string;
}

export interface Categories {
    id: string;
    name: string;
    words: Words[]
}


interface VocubularyState {
    categories: Categories[];
}

export const initialState: VocubularyState = {
    categories: []
}

export const vocubularySlice = createSlice({
    name: 'vocubulary',
    initialState,
    reducers: {
        createCategory: (state, action: PayloadAction<string>) => {
            state.categories = [...state.categories, {
                id: generateRandomId(),
                name: action.payload,
                words: []
            }]
        }
    }
})

export const { createCategory } = vocubularySlice.actions;

export const selectVocubulary = (state: RootState) => state.vocubulary;

export default vocubularySlice.reducer;