//var Map = require('es6-map');
//se buscara por nombre del pokemon
export const getPokemonsByName = (data, selection) => {
  for (let i=0; i < data.length; i++){
    //console.log(data[i].name + " " +selection);
    if(data[i].name === selection){
      return data[i];
    }
    
  }
  return null;
};

//cuantos tipos de pokemon
export const getAllTypes = (data) =>{
  /* eslint no-undef: "off", curly: "error" */
  let types = new Map();
  
  for (let i= 0; i < data.length; i++){
    let pokemon = data[i];
    let pokemonType = pokemon.type;
    for(let j= 0; j< pokemonType.length; j++){
      types.set(pokemonType[j], true);
    }
  }
  //console.log("tipos "+ types);
  
  return types;
};

//buscara el tipo de pokemon
export const getPokemonsByType = (data, pokemonType) => {
  let pokemonsType =[];

  for (let i=0; i < data.length; i++){
    //console.log(data[i].type + " " + pokemonType); //esta imprimiendo los pokemones que contengan el mismo tipo
    let pokemon = data[i];
    let pokemonTypes = pokemon.type;
    for(let j= 0; j< pokemonTypes.length; j++){
      if (pokemonTypes[j] === pokemonType){
        pokemonsType.push(pokemon);
      }
    }
    /*if(data[i].type === pokemonType){
      //console.log("grupo de tipo "+data[i]);
      return data[i];
    
    }*/
  }
  return pokemonsType;
};

/*export const getPokemonById = (data, pokemonId)=> {
  
}*/

/*export const typeGroup = (data, group)=> {
  let group = data.filter(data => data.type === " " );
}*/
 