import { findById } from './utils.js';
// Set Magic string for dummy proof value
const POKEDEX = 'POKEDEX';

//  getPokedex function
export function getPokedex() {
    // set pulled item from pokedex to string
    const stringPokedex = localStorage.getItem(POKEDEX);
    //  If there is no item in local storage return empty array
    if (!stringPokedex) {
        return [];
    }
    // set string item to parsed item
    const parsedPokedex = JSON.parse(stringPokedex);

    return parsedPokedex;
}

//  set stringified item to local storage
export function setPokedex(parsedPokedex) {
    const stringPokedex = JSON.stringify(parsedPokedex);

    localStorage.setItem(POKEDEX, stringPokedex);
}

// what to do upon encountering a pokemon
export function encounterPokemon(pokemon) {
    // bring pokedex into the func
    const pokedex = getPokedex();

    const matchingPokemon = findById(pokedex, pokemon.pokemon);

    if (matchingPokemon) {
        matchingPokemon.encountered++;
    } else {
        // initialize a NEW pokedex object
        const newPokemon = {
            id: pokemon.pokemon,
            captured: 0,
            encountered: 1
        };

        pokedex.push(newPokemon);
        // add updated pokedex to local storage
        setPokedex(pokedex);

        return pokedex; 
    }
}

//  Capturing a pokemon function, similar to encounter function
export function capturePokemon(pokemon) {
    // bring pokedex into func
    const pokedex = getPokedex();

    const matchingPokemon = findById(pokedex, pokemon.pokemon);
    
    matchingPokemon.captured++;
    //   add updated pokedex to local storage
    setPokedex(pokedex);

    return pokedex;
}