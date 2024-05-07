import { configureStore } from '@reduxjs/toolkit';
import CharacterReducer from './reducers/characterSlice';

export const store = configureStore({
	reducer: {
		character: CharacterReducer,
	},
});
