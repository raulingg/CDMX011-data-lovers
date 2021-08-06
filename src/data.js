export function filterGender (characters, gender){
  return characters.filter((gen) => {
  return gen.gender === gender;
})
}

/* export function searchByTeam(dataX, pais, buscarTodo, datA=data.athletes) {
  let filterPerTeam;
  if (buscarTodo) {
    filterPerTeam = datA.filter(function (atleta) {
      return atleta.team == pais;
    });
  } else {
    filterPerTeam = dataX.filter(function (atleta) {
      return atleta.team == pais;
    });
  }
  console.log(filterPerTeam);
  return filterPerTeam;*/



export function filterStat (characters, status){
  return characters.filter((stat) => {
  if (stat.status === status){
    return status;
  }
})
}

export function sortBy (filterGender){
  return filterGender.sort((a, b) => {
   if (a.name > b.name) {
     return 1;
   }
   else if (a.name < b.name) {
     return -1;
   }
})
}

// export function 

 /*export function searchChar (characters) {
  return characters.filter(name => name.name == "");
}

export function searchCha (){
  for (let i=0; i < nameC.length; i++){
    
  }
} */