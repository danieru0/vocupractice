import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

import { saveToLocalStorage, loadFromLocalStorage } from '../../helpers/localStorageHandler';

interface VocupracticeState {
    type: string;
    reading: boolean;
}

const initialState: VocupracticeState = {
    type: 'translation',
    reading: true
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
        }
    }
})

export const { loadVocupractice, setType, setReading } = vocupracticeSlice.actions;

export const selectVocupractice = (state: RootState) => state.vocupractice;

export default vocupracticeSlice.reducer;