// estas funciones son de ejemplo
//
export const getPokemonsByName = (data, selection) => {
  for (let i=0; i < data.length; i++){
    console.log(data[i].name + " " +selection);
    if(data[i].name === selection){
      return data[i];
    }
    
  }
  return null;
};

export const anotherExample = () => {
  return 'OMG';
};
