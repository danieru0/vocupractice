import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import vocabularyReducer from '../features/vocabulary/vocabularySlice';
import vocupracticeReducer from '../features/vocupractice/vocupracticeSlice';
import modalReducer from '../features/modal/modalSlice';

export const store = configureStore({
	reducer: {
		vocabulary: vocabularyReducer,
		vocupractice: vocupracticeReducer,
		modal: modalReducer
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
