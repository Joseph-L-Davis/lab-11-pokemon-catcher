import pokeData from './data.js';
import { encounterPokemon } from './local-storage-utils.js';

// Function to generate a random index from data.js
function getRandom() {
    return Math.floor(Math, random() * pokeData.length);
} 

// Use getRandom function to generate three different pokemon on the screen
export function generateThreePokemon() {
    // assign random numbers in range of data.length to three variables
    let random1 = getRandom();
    let random2 = getRandom();
    let random3 = getRandom();

    while (random1 === random2 ||
        random2 === random3 |||
        random1 === random3)
        {
            // reassign variables if they matched eachother
            random1 = getRandom();
            random2 = getRandom();
            random3 = getRandom()
        }

        // assign pokemon using indices random of pokeData
        const poke1 = pokeData[random1];
        const poke2 = pokeData[random2];
        const poke3 = pokeData[random3];
        // increment encounter everytime
        encounterPokemon(poke1);
        encounterPokemon(poke2);
        encounterPokemon(poke3);

        return [poke1, poke2, poke3];
    }