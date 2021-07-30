// import { name } from './data.js'
import data from './data/rickandmorty/rickandmorty.js';

const characters = data.results;
let screen = "";

characters.forEach(char => {
  if (char.id <= 5) {
    screen += characterHTML(char);
  }
})

function characterHTML(info) {
  return `<section class="card"> 
    <img id= "imgn" src="${info.image}">
    <h3> ${info.name} </h3>
    <p>Status: ${info.status}</p>
    <p>Species: ${info.species}</p>
    <p>Gender: ${info.gender}</p>
    <p>Origin: ${info.origin.name}</p>
    <p>Location: ${info.location.name}</p>
    </section> `;
}

//parent element
document.getElementById("root").innerHTML = screen;

//  Función que hace el Filtrado
const selectFilter = document.getElementById("filter");
selectFilter.addEventListener("change", (event) => {

  
  let filterData;

  // Filtrar por Genero Masculino
  if (event.target.value == "genderM") {

    hidden();

    filterData = characters.filter(gender => gender.gender == "Male")
    console.table(filterData);
    
    filterData.forEach(char => {
      screen += characterHTML(char);
    })
    document.getElementById("root").innerHTML = screen;
    
  }

  // Filtrar por Genero Femeninos
  else if (event.target.value == "genderF") {

    filterData = characters.filter(gender => gender.gender == "Female")
    console.table(filterData);

    filterData.forEach(char => {
      screen += characterHTML(char);
    })
    document.getElementById("root").innerHTML = screen;
    
  }

  //Filtrar por genero desconocido
  else if (event.target.value == "genderU") {
    filterData = characters.filter(gender => gender.gender == "unknown")
    console.table(filterData);

    filterData.forEach(char => {
      screen += characterHTML(char);
    })
    document.getElementById("root").innerHTML = screen;
  }

  // Filtrar por Estado Vivo
  else if (event.target.value == "statusA") {

    filterData = characters.filter(status => status.status == "Alive")
    console.table(filterData);

    filterData.forEach(char => {
      screen += characterHTML(char);
    })
    document.getElementById("root").innerHTML = screen;
  }

  // Filtrar por Estado Muerto
  else if (event.target.value == "statusD") {
    filterData = characters.filter(status => status.status == "Dead")
    console.table(filterData);

    filterData.forEach(char => {
      screen += characterHTML(char);
    })
    document.getElementById("root").innerHTML = screen;
  }
});



// Acomodar por: 

 /* const sortBy = document.getElementById("sort");
sortBy.addEventListener("change", (event) => {

let sortData;

if(event.target.value == "az") {
// Acomodar por A -Z

sortData = characters.sort((a, b) => {
  return a.name < b.name ? -1 : 1;
});

sortData.forEach(char => {
  screen += characterHTML(char);
   })
document.getElementById("root").innerHTML = screen;
}

}); */

function hidden() {
  const dom = document.getElementById("root");
  while (dom.firstChild) {
    dom.removeChild(dom.firstChild);
  }
}