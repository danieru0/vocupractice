import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';

import { Words } from '../vocabulary/vocabularySlice';

import { saveToLocalStorage, loadFromLocalStorage } from '../../helpers/localStorageHandler';

interface VocupracticeState {
    type: string;
    reading: boolean;
    categoryId: string;
    selectedCategoriesId: string[];
    categoryIdFromSelected: string;
    word: Words | null;
}

const initialState: VocupracticeState = {
    type: 'translation',
    reading: true,
    categoryId: '',
    selectedCategoriesId: [],
    categoryIdFromSelected: '',
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
            state.selectedCategoriesId = [];
        },
        setSelectedCategoriesId: (state, action: PayloadAction<string[]>) => {
            state.selectedCategoriesId = action.payload;
            state.categoryId = '';
        },
        setWord: (state, action: PayloadAction<{word: Words | null, selectedCategoryId: string}>) => {
            state.word = action.payload.word;
            state.categoryIdFromSelected = action.payload.selectedCategoryId;
        },
        setCurrentWordImportant: (state, action: PayloadAction<boolean>) => {
            state.word!.important = action.payload;
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

    dispatch(setWord({word: words[randomKey], selectedCategoryId: ''}));
}

export const loadRandomWordFromMultipleCategories = (categoriesId: string[]): AppThunk => (dispatch, getState) => {
    const vocubularyCategories = getState().vocabulary.categories;

    let randomCategoryKey = Math.floor(Math.random() * categoriesId.length);
    let randomCategory = vocubularyCategories[categoriesId[randomCategoryKey]];

    if (!randomCategory) {
        return false;
    }

    while (randomCategory.words.length === 0) {
        randomCategoryKey = Math.floor(Math.random() * categoriesId.length);
        randomCategory = vocubularyCategories[categoriesId[randomCategoryKey]];
    }

    const randomWordKey = Math.floor(Math.random() * randomCategory.words.length);

    dispatch(setWord({
        word: randomCategory.words[randomWordKey],
        selectedCategoryId: randomCategory.id
    }));
}

export const { loadVocupractice, setType, setReading, setSelectedCategoriesId, setCategoryId, setWord, setCurrentWordImportant } = vocupracticeSlice.actions;

export const selectVocupractice = (state: RootState) => state.vocupractice;

export default vocupracticeSlice.reducer;