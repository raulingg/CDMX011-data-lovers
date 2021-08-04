import data from './data/rickandmorty/rickandmorty.js';

const characters = data.results;

export const filterByGenderM = () => {
  const filterData = characters.filter(gender => gender.gender == "Male");
  return filterData;
};

export const filterByGenderF = () => {
  const filterData = characters.filter(gender => gender.gender == "Female");
  return filterData;
}

export const filterByGenderU = () => {
  const filterData = characters.filter(gender => gender.gender == "unknown");
  return filterData;
}

export const filterByStatusA = () => {
  const filterData = characters.filter(status => status.status == "Alive");
  return filterData;
}

export const filterByStatusD = () => {
  const filterData = characters.filter(status => status.status == "Dead");
  return filterData;
}

 // cambia  la interfaz "a-z"
 /* export const sortBy= characters.sort((a,b ) => {
  if (a.name > b.name){
    return 1
  }
  else if (a.name < b.name) {
    return -1
  }
}); 
console.log(sortBy); */


const sB= characters.sort((a, b) => (a.name > b.name) 
  ? 1 
  : -1);
console.log(sB); 




