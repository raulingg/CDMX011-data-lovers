import {getPokemonsByName} from './data.js';
import {getPokemonsByType} from './data.js';
import {getAllTypes} from './data.js';
import data from './data/pokemon/pokemon.js';

//sacar arreglo de pokemons y lo pone en pokemons
const pokemons = data.pokemon;
//console.log(pokemons);//total de pokemon(todos)

//enlista tipos
const searchTypes =()=>{
    /* eslint no-undef: "off", curly: "error" */
    let totalTypes = new Map();
    totalTypes = getAllTypes(pokemons, totalTypes);
    const iterator1 = totalTypes.keys();

    for (let i= 0; i< totalTypes.size; i++){
        console.log("tipo de Pokemon: " + iterator1.next().value);
        if (iterator1.next().value){
           
        }
    }
}
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
//tiene que mandar los pokemon que pertenecen al tipo del primer dropdown

const fillPokemonDropdown=(pokemons)=>{
    console.log("aqui");
    console.log(pokemons);
    document.getElementById("dropdownPokemon").options.length = 0; //limpia dropdown
    let dpp = document.getElementById("dropdownPokemon");
    pokemons.forEach(element => {
        let option = document.createElement("OPTION");
        option.innerHTML = element.num + ":"+element.name;
        dpp.options.add(option);
    });//console.log(element.num+":"+element.name));
}

//esta buscando el nombre que ingreso el usuario y cambia segun el nombre del pokemon
const searchByName = ()=>{
    let name= document.getElementById("searchName");
    let nameValue= name.value;
    const pokemon = getPokemonsByName(pokemons, nameValue);
    document.getElementById("pokemonInicio").innerHTML = pokemon.name;
    document.getElementById("imgPokemon").src = pokemon.img;
    document.getElementById("numPokemon").innerHTML = pokemon.num;
    document.getElementById("detailsPokemon").innerHTML = pokemon.about;
    
}
fillTypeDropdown(pokemons);
fillPokemonDropdown(pokemons);


//document.getElementById("navbardrop").addEventListener("click", searchTypes);
document.getElementById("search").addEventListener("click", searchByName)
console.log(document.getElementById("tipodepokemon"))
/*document.getElementById("dropdownPokemon").addEventListener("change",(e)=>{
    console.log(getPokemonsByType(pokemons,e.target.value))
})*/

document.getElementById("tipodepokemon").addEventListener("change",(e)=>{
    fillPokemonDropdown(getPokemonsByType(pokemons,e.target.value))
})


/*
console.log(getPokemonsByName(pokemons, "eevee")); //buscando un nombre
console.log(getPokemonsByType(pokemons, "poison")); //buscando un tipo
console.log("imprimire el numero de pokemon: "+ pokemons.num);
*/
