import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slice/counter';
import { pokemonSlice } from './slice/pokemon';

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        pokemons: pokemonSlice.reducer,
    },
});