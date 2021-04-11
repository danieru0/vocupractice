import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

import generateRandomId from '../../helpers/generateRandomId';
import { saveToLocalStorage } from '../../helpers/localStorageHandler';
import showNotification from '../../helpers/showNotification';

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


interface VocabularyState {
    categories: {
        [key: string]: Categories
    }
}

export const initialState: VocabularyState = {
    categories: {}
}

export const vocabularySlice = createSlice({
    name: 'vocubulary',
    initialState,
    reducers: {
        loadVocabulary: (state, action: PayloadAction<any>) => {
            state.categories = action.payload;
        },
        createCategory: (state, action: PayloadAction<string>) => {
            const randomId = generateRandomId();
            
            state.categories[randomId] = {
                id: randomId,
                name: action.payload,
                words: []
            }

            saveToLocalStorage('vocupractice', current(state).categories);

            showNotification('Success', 'Category has been created!', 'success');
        },
        createWord: (state, action: PayloadAction<{categoryId: string, word: Words}>) => {
            const { categoryId, word } = action.payload;

            state.categories[categoryId].words = [...state.categories[categoryId].words, word];

            saveToLocalStorage('vocupractice', current(state).categories);

            showNotification('Success', 'Word has been added!', 'success');
        },
        deleteCategory: (state, action: PayloadAction<string>) => {
            delete state.categories[action.payload];

            saveToLocalStorage('vocupractice', current(state).categories);

            showNotification('Success', 'Category has been deleted!', 'success');
        },
        deleteWord: (state, action: PayloadAction<{categoryId: string, wordId: string, notification: boolean}>) => {
            const { categoryId, wordId, notification } = action.payload;

            state.categories[categoryId].words = state.categories[categoryId].words.filter((item) => {
                return item.id !== wordId;
            });

            saveToLocalStorage('vocupractice', current(state).categories);

            if (notification) {
                showNotification('Success', 'Word has been deleted!', 'success');
            }
            
        },
        updateWord: (state, action: PayloadAction<{categoryId: string, word: Words}>) => {
            const { categoryId, word } = action.payload;

            const selectedWord = state.categories[categoryId].words.filter((item) => {
                return item.id === word.id;
            })[0] = word;

            state.categories[categoryId].words = state.categories[categoryId].words.map((item) => {
                return item.id === word.id ? selectedWord : item;
            })

            saveToLocalStorage('vocupractice', current(state).categories);

            showNotification('Success', 'Word has been updated!', 'success');
        }
    }
})

export const { loadVocabulary, createCategory, createWord, deleteCategory, deleteWord, updateWord } = vocabularySlice.actions;

export const selectVocabulary = (state: RootState) => state.vocabulary;

export default vocabularySlice.reducer;