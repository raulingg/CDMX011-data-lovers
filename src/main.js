import data from './data/rickandmorty/rickandmorty.js';
import { filterByGenderM, filterByGenderF, filterByGenderU, filterByStatusA, filterByStatusD } from './data.js';
//import { sortData } from './data.js';

const characters = data.results;

window.onload = function printData() {
  let firstFive = "";
  characters.forEach(char => {
    if (char.id <= 5) {
      firstFive += characterHTML(char);
      document.getElementById("root").innerHTML = firstFive;
    }
  })
}

function characterHTML(info) {
  return `<div class="card"> 
    <img id= "imgn" src="${info.image}">
    <dl id="card_content">
      <dt>${info.name}</dt>
      <dd><b>Status:</b> ${info.status}</dd>
      <dd><b>Species:</b> ${info.species}</dd>
      <dd><b>Gender:</b> ${info.gender}</dd>
      <dd><b>Origin:</b> ${info.origin.name}</dd>
      <dd><b>Location:</b> ${info.location.name}</dd></dl>
    </div> `;
}


//  Función que hace el Filtrado y ordenado
const selectFilter = document.getElementById("filter");
selectFilter.addEventListener("change", (event) => {

  // Filtrar por Genero Masculino
  if (event.target.value == "genderM") {
    let screen = "";
    const maleGender = filterByGenderM();


    maleGender.forEach(char => {
      screen += characterHTML(char);
    })
    document.getElementById("root").innerHTML = screen;
  }

  // Filtrar por Genero Femeninos
  else if (event.target.value == "genderF") {
    let screen = "";
    const femaleGender = filterByGenderF();

    femaleGender.forEach(char => {
      screen += characterHTML(char);
    })
    document.getElementById("root").innerHTML = screen;
  }

  //Filtrar por genero desconocido
  else if (event.target.value == "genderU") {
    let screen = "";
    const unknownGender = filterByGenderU();

    unknownGender.forEach(char => {
      screen += characterHTML(char);
    })
    document.getElementById("root").innerHTML = screen;
  }

  // Filtrar por Estado Vivo
  else if (event.target.value == "statusA") {
    let screen = "";
    const statusAlive = filterByStatusA();

    statusAlive.forEach(char => {
      screen += characterHTML(char);
    })
    document.getElementById("root").innerHTML = screen;
  }

  // Filtrar por Estado Muerto
  else if (event.target.value == "statusD") {
    let screen = "";
    const statusDead = filterByStatusD();

    statusDead.forEach(char => {
      screen += characterHTML(char);
    })
    document.getElementById("root").innerHTML = screen;
  }

  // Mostrar todos los personajes
  else if (event.target.value == "allCharacters") {
    let screen = "";
    characters.forEach(char => {
      screen += characterHTML(char);
      document.getElementById("root").innerHTML = screen;
    })
  }
});



// Acomodar por: 
/*const sortC = document.getElementById("sort");

sortC.addEventListener("change", (event) => {

  let sortBy;

  if (event.target.value === "az") {
    let screen = "";
    sortBy = "az";


    sortData(characters, sortBy).forEach(char => {
      screen += characterHTML(char);
      document.getElementById("root").innerHTML = screen();
    })

  }

  else if (event.target.value == "za") {
    let screen = "";
    sortBy = "za";
    

    sortData(characters, sortBy).forEach(char => {
      screen += characterHTML(char);
      document.getElementById("root").innerHTML = screen;
    })
  }

});*/