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
export const getAllTypes = (data,types) =>{

  
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
  for (let i=0; i < data.length; i++){
    console.log(data[i].type + " " + pokemonType); //esta imprimiendo los pokemones que contengan el mismo tipo
    if(data[i].type === pokemonType){
      return data[i];
    }
  }
  return null;
};

/*export const getPokemonById = (data, pokemonId)=> {
  
}*/

/*export const typeGroup = (data, group)=> {
  let group = data.filter(data => data.type === " " );
}*/
 