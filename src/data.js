import data from "./data/rickandmorty/rickandmorty.js";

export function filterGender (dataF, gender, allCharacters, characters = data.results) {
  let filterByGender;
  if (allCharacters) {
      filterByGender = characters.filter(function (gen){
        return gen.gender === gender;
      });
  } else {
    filterByGender = dataF.filter(function (gen){
      return gen.gender === gender;
  });
}
  console.log(filterByGender);
  return filterByGender;
}



export function filterStatus (dataF, status, allCharacters, characters = data.results) {
  let filterByStatus;
  if (allCharacters){
    filterByStatus = characters.filter(function (stat){
      return stat.status === status;
    });
  } 
  else {
    filterByStatus = dataF.filter(function (stat){
  return stat.status == status;
});
  }
console.log(filterByStatus);
return filterByStatus;
}

export function sortDe(data){
  return data.sort((a, b) => {
    return a.name < b.name ? 1 : -1;
  })
}

export function sortAs(data) {
  return data.sort((a, b) => {
    return a.name > b.name ? 1 : -1; 

  })
}