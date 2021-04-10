import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';

import { Words } from '../vocabulary/vocabularySlice';

import { saveToLocalStorage, loadFromLocalStorage } from '../../helpers/localStorageHandler';

interface VocupracticeState {
    type: string;
    reading: boolean;
    categoryId: string;
    selectedCategoriesId: string[];
    word: Words | null;
}

const initialState: VocupracticeState = {
    type: 'translation',
    reading: true,
    categoryId: '',
    selectedCategoriesId: [],
    word: null
}

export const vocupracticeSlice = createSlice({
    name: 'vocupractice',
    initialState,
    reducers: {
        loadVocupractice: (state) => {
            const data = loadFromLocalStorage('vocupracticesettings');

            if (data) {
                state.type = data.type ? data.type : 'translation';
                state.reading = data.reading ? data.reading : false;
            }
        },
        setType: (state, action: PayloadAction<string>) => {
            state.type = action.payload;

            saveToLocalStorage('vocupracticesettings', current(state));
        },
        setReading: (state, action: PayloadAction<boolean>) => {
            state.reading = action.payload;

            saveToLocalStorage('vocupracticesettings', current(state));
        },
        setCategoryId: (state, action: PayloadAction<string>) => {
            state.categoryId = action.payload;
        },
        setWord: (state, action: PayloadAction<Words | null>) => {
            state.word = action.payload;
        }
    }
})

export const loadRandomWordFromCategory = (category: string): AppThunk => (dispatch, getState) => {
    const vocubularyCategories = getState().vocabulary.categories;

    if (!vocubularyCategories[category]) {
        return false;
    }

    const words = vocubularyCategories[category].words;
    const randomKey = Math.floor(Math.random() * words.length);

    dispatch(setWord(words[randomKey]))
}

export const { loadVocupractice, setType, setReading, setCategoryId, setWord } = vocupracticeSlice.actions;

export const selectVocupractice = (state: RootState) => state.vocupractice;

export default vocupracticeSlice.reducer;