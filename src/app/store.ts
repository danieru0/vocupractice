import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import vocubularyReducer from '../features/vocubulary/vocubularySlice';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		vocubulary: vocubularyReducer
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
