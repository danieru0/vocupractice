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
    categories: {
        [key: string]: Categories
    }
}

export const initialState: VocubularyState = {
    categories: {}
}

export const vocubularySlice = createSlice({
    name: 'vocubulary',
    initialState,
    reducers: {
        createCategory: (state, action: PayloadAction<string>) => {
            const randomId = generateRandomId();
            
            state.categories[randomId] = {
                id: randomId,
                name: action.payload,
                words: []
            }
        },
        createWord: (state, action: PayloadAction<{categoryId: string, word: Words}>) => {
            const { categoryId, word } = action.payload;

            state.categories[categoryId].words = [...state.categories[categoryId].words, word];
        }
    }
})

export const { createCategory, createWord } = vocubularySlice.actions;

export const selectVocubulary = (state: RootState) => state.vocubulary;

export default vocubularySlice.reducer;