// estas funciones son de ejemplo

//import athletes from "./data/athletes/athletes.js";
import data from './data/athletes/athletes.js';

export const name = data.athletes.sort((a,b) => {
  return (a.name < b.name) ? - 1 : 1
})
 //console.log(name);

/*export const sport = data.athletes.filter(function(spt) {
  return spt.sport == "Volleyball";
});*/

export function searchByTeam(pais){
  let filterPerTeam=data.athletes.filter(function(team) {
  return team.team == pais;
})
return filterPerTeam
}
export function searchBySport(Deportes){
  let filterPerSport=data.athletes.filter(function(sport) {
  return sport.sport == Deportes;
})
return filterPerSport
}
/*export function searchByGender(Genero){
  let filterPerGender=data.athletes.filter(function(gender) {
  return gender.gender== Genero;
})
return filterPerGender
}*/

export function searchByMedal(Medallas){
  let filterPerMedal=data.athletes.filter(function(medal) {
  return medal.medal == Medallas;
})
return filterPerMedal
}
