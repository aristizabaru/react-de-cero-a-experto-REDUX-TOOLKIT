import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slice/counter';

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    },
});