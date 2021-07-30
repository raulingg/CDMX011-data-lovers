// estas funciones son de ejemplo
//import athletes from "./data/athletes/athletes.js";
import data from "./data/athletes/athletes.js";

export const name = data.athletes.sort((a, b) => {
  return a.name < b.name ? -1 : 1;
});
//console.log(name);

export function searchByTeam(dataX, pais, buscarTodo) {
  let filterPerTeam;
  if (buscarTodo) {
    filterPerTeam = data.athletes.filter(function (atleta) {
      return atleta.team == pais;
    });
  } else {
    filterPerTeam = dataX.filter(function (atleta) {
      return atleta.team == pais;
    });
  }
  return filterPerTeam;
}
export function searchBySport(dataX, deporte, buscarTodo) {
  let filterPerSport;
  if (buscarTodo) {
    filterPerSport = data.athletes.filter(function (atleta) {
      return atleta.sport == deporte;
    });
  } else {
    filterPerSport = dataX.filter(function (atleta) {
      return atleta.sport == deporte;
    });
  }
  return filterPerSport;
}
export function searchByGender(dataX, genero, buscarTodo) {
  let filterPerGender;
  if (buscarTodo) {
    filterPerGender = data.athletes.filter(function (atleta) {
      return atleta.gender == genero;
    });
  } else {
    filterPerGender = dataX.filter(function (atleta) {
      return atleta.gender == genero;
    });
  }
  return filterPerGender;
}

export function searchByMedal(dataX, medalla, buscarTodo) {
  let filterPerMedal;
  if (buscarTodo) {
    filterPerMedal = data.athletes.filter(function (atleta) {
      return atleta.medal == medalla;
    });
  } else {
    filterPerMedal = dataX.filter(function (atleta) {
      return atleta.medal == medalla;
    });
  }
  return filterPerMedal;
}
