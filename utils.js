import pokeData from './data.js';

// Utilize findById func from last lab
export function findById(array, id) {
    return array.find(item => id === item.id);
}

export function findByPokeName(name) {
    return pokeData.find(poke => name === poke.pokemon);
}