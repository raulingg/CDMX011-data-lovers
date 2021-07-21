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
  let resultadito=data.athletes.filter(function(team) {
  return team.team == pais;
})
return resultadito
}

