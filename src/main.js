import {getPokemonsByName} from './data.js';
import {getPokemonsByType} from './data.js';
import {getAllTypes} from './data.js';
import data from './data/pokemon/pokemon.js';

//sacar arreglo de pokemons y lo pone en pokemons
const pokemons = data.pokemon;
console.log(pokemons);//total de pokemon(todos)

//enlista tipos
const totalTypes = getAllTypes(pokemons);
const iterator1 = totalTypes.keys();

for (let i= 0; i< totalTypes.size; i++){
    
    console.log("tipo de Pokemon: " + iterator1.next().value);
}


console.log("listado tipos "+ totalTypes);

console.log(getPokemonsByName(pokemons, "eevee")); //buscando un nombre
console.log(getPokemonsByType(pokemons, "water")); //buscando un tipo

