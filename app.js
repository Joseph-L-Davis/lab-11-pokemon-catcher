// import functions and grab DOM elements
import { generateThreePokemon } from './data-utils.js';
import { capturePokemon } from './local-storage-utils.js';
import { findByPokeName } from './utils.js';

const button = document.querySelector('button');

const poke1Encounter = document.querySelector('#poke1-encounter');
const poke2Encounter = document.querySelector('#poke2-encounter');
const poke3Encounter = document.querySelector('#poke3-encounter');

const poke1Captured = document.querySelector('#poke1-captured');
const poke2Captured = document.querySelector('#poke2-captured');
const poke3Captured = document.querySelector('#poke3-captured');

function createPokeDom() {
    
    const pokeRadio1 = document.querySelector('#poke1-radio');
    const pokeRadio2 = document.querySelector('#poke2-radio');
    const pokeRadio3 = document.querySelector('#poke3-radio');

    const pokeLabel1 = document.querySelector('#poke1-label');
    const pokeLabel2 = document.querySelector('#poke2-label');
    const pokeLabel3 = document.querySelector('#poke3-label');

    const threePokemon = generateThreePokemon();

    const img1 = document.querySelector('#poke1-img');
    const img2 = document.querySelector('#poke2-img');
    const img3 = document.querySelector('#poke3-img');

    img1.src = threePokemon[0].url_image;
    img2.src = threePokemon[1].url_image;
    img3.src = threePokemon[2].url_image;

    pokeLabel1.append(img1);
    pokeLabel2.append(img2);
    pokeLabel3.append(img3);

    pokeRadio1.value = threePokemon[0].pokemon;
    pokeRadio2.value = threePokemon[1].pokemon;
    pokeRadio3.value = threePokemon[2].pokemon;

}

createPokeDom();

button.addEventListener('click', () => {
    const selectedRadio = document.querySelector('input:checked');

    const pokeObject = findByPokeName(selectedRadio.value);
    capturePokemon(pokeObject);
    createPokeDom();
});


// set event listeners to update state and DOM