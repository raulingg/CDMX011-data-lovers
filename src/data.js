
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
  const types= new Map();
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
    //console.log(data[i].type + " " + pokemonType);
    if(data[i].type === pokemonType){
      return data[i];
    }
  }
  return null;
};
