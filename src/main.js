import {getPokemonsByName} from './data.js';
import {getPokemonsByType} from './data.js';
import {getAllTypes} from './data.js';
import data from './data/pokemon/pokemon.js';

//sacar arreglo de pokemons y lo pone en pokemons
const pokemons = data.pokemon;

//Asigna los tipos de pokemon
const fillTypeDropdown = (pokemons) =>{
    let totalTypes = getAllTypes(pokemons);
    let dp= document.getElementById("tipodepokemon");
    const iterator = totalTypes.keys();
    for (const key of iterator) {
        //console.log(key);
        let option = document.createElement("OPTION");
        option.innerHTML = key;
        
        dp.options.add(option);
    }
    
}

//mandar los pokemon que pertenecen al tipo del primer dropdown
const fillPokemonDropdown=(pokemons)=>{
    console.log("aqui estoy mandando los pokemon del tipo seleccionado");
    console.log(pokemons);
    document.getElementById("dropdownPokemon").options.length = 0; //limpia dropdown
    let dpp = document.getElementById("dropdownPokemon");
    pokemons.forEach(element => {
        let option = document.createElement("OPTION");
        option.innerHTML = element.name;
        dpp.options.add(option);
    });//console.log(element.num+":"+element.name));
    
}

//esta mostrando el pokemon seleccionado/buscado
const showPokemon = (pokemon) =>{
    console.log("chido "+pokemon);
    document.getElementById("pokemonInicio").innerHTML = pokemon.name;
    document.getElementById("types-id").innerHTML= pokemon.type;
    document.getElementById("imgPokemon").src = pokemon.img;
    document.getElementById("numPokemon").innerHTML = pokemon.num;
    document.getElementById("detailsPokemon").innerHTML = pokemon.about; 
}

//muestra los tipos de pokemon y el primer pokemon de ese grupo
document.getElementById("tipodepokemon").addEventListener("change",(e)=>{
    let p = getPokemonsByType(pokemons,e.target.value);
    fillPokemonDropdown(p);
    showPokemon(p[0]);
})

//listado de pokemones del tipo seleccionado
document.getElementById("dropdownPokemon").addEventListener("change",(e)=>{
    let pSelected = getPokemonsByName(pokemons,e.target.value);
    showPokemon(pSelected);
})

//busqueda por nombre
document.getElementById("search").addEventListener("click",(e)=>{
    let name= document.getElementById("searchName");
    let nameValue= name.value;
    const pokemon = getPokemonsByName(pokemons, nameValue);
    showPokemon(pokemon);
})

//las funciones que cargan al inicio de la pagina deben ir al ultimo del archivo
fillTypeDropdown(pokemons);
fillPokemonDropdown(pokemons);
showPokemon(pokemons[0]);
/*
console.log(getPokemonsByName(pokemons, "eevee")); //buscando un nombre
console.log(getPokemonsByType(pokemons, "poison")); //buscando un tipo
console.log("imprimire el numero de pokemon: "+ pokemons.num);
*/
