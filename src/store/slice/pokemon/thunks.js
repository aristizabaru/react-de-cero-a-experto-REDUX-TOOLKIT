/* Son acciones que disparan otros eventos una vez se ejecutan. Se usan
en Redux principalmente para el manejo de peticiones o acciones asíncronas.
Para esto retornan una función asíncrona. */

import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPokemons());

        // Implementación usando fetch
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
        // const data = await resp.json();

        // Implementación usando axios
        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);

        const payload = {
            page: page + 1,
            pokemons: data.results
        };

        dispatch(setPokemons(payload));
    };
};