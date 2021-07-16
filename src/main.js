import {getPokemonsByName} from './data.js';
import data from './data/pokemon/pokemon.js';

const pokemons = data.pokemon;
console.log(pokemons);
//imprime todos los pokemon(nombre)
/*for (let i= 0; i <pokemons.length; i++){
    console.log(pokemons[i].name);
}*/

console.log(getPokemonsByName(pokemons, "eevee"));


