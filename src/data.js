export function filterGender (characters, gender){
  return characters.filter((gen) => {
  if (gen.gender === gender){
    return gender;
  }
})
}

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

export function searchChar (searchOne) {
  return 
}

/*export function sortBy (filterGender){
  return filterGender.sort((a, b) => {
   if (a.name > b.name) {
     return 1;
   }
   else if (a.name < b.name) {
     return -1;
   }
})
}*/




