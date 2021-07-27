import {getPokemonsByName} from './data.js';
import {getPokemonsByType} from './data.js';
import {getAllTypes} from './data.js';
import data from './data/pokemon/pokemon.js';

//sacar arreglo de pokemons y lo pone en pokemons
const pokemons = data.pokemon;
console.log(pokemons);//total de pokemon(todos)

//enlista tipos
const searchTypes =()=>{
    let totalTypes = new Map();
    totalTypes = getAllTypes(pokemons, totalTypes);
    const iterator1 = totalTypes.keys();

    for (let i= 0; i< totalTypes.size; i++){
        console.log("tipo de Pokemon: " + iterator1.next().value);
        if (iterator1.next().value){
            console.log()
        }
    }
}

const searchByName = ()=>{
    let name= document.getElementById("searchName");
    let nameValue= name.value;
    const pokemon = getPokemonsByName(pokemons, nameValue);
    document.getElementById("nombrePokemon").innerHTML = pokemon.egg;
    
}

document.getElementById("navbardrop").addEventListener("click", searchTypes);
document.getElementById("search").addEventListener("click", searchByName)



console.log(getPokemonsByName(pokemons, "eevee")); //buscando un nombre
console.log(getPokemonsByType(pokemons, "poison")); //buscando un tipo
console.log("imprimire el numero de pokemon: "+ pokemons.num);

