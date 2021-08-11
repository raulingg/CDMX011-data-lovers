import data from "./data/rickandmorty/rickandmorty.js";
import { filterGender, filterStatus, sortDe, sortAs } from "./data.js";


const characters = data.results;
//const personajes = ...data. 

const selectG = document.getElementById("gender");
const selectS = document.getElementById("status");
const selectSort = document.getElementById("sort");
const searchC = document.getElementById("search1");
const root=document.getElementById("root")

// Pantalla Principal
window.onload = printFirstFiveCharacters

// Función de imprimir 
function print(characters) {
  let screen = "";
  characters.forEach((char) => {
    screen += characterHTML(char);
  });

  return root.innerHTML = screen;
}

function printFirstFiveCharacters() {
  let firstFiveHTML = "";
  characters.forEach((char) => {
    if (char.id <= 5) {
      firstFiveHTML += characterHTML(char);
    }
  });

  root.innerHTML = firstFiveHTML;
};

// Pone en HTML
function characterHTML(info) {
  return `<div class="card">  
    <img id="imgn" src="${info.image}" alt="characters">
    <dl id="card_content">
      <dt>${info.name}</dt>
      <dd><b>Status:</b> ${info.status}</dd>
      <dd><b>Species:</b> ${info.species}</dd>
      <dd><b>Gender:</b> ${info.gender}</dd>
      <dd><b>Origin:</b> ${info.origin.name}</dd>
      <dd><b>Location:</b> ${info.location.name}</dd></dl>
    </div> `;
}

selectG.addEventListener("change", filter);
selectS.addEventListener("change", filter);

selectSort.addEventListener("change", function(e){
  if(e.target.value == "za"){
    let newDataSort = sortDe(characters)
    print(newDataSort)
  }else if(e.target.value == "az"){
    let newDataSort = sortAs(characters)
    print(newDataSort)
  }
});




// Funcion que cruza filtrados 
function filter() {
  let preFilter = [];
  let gender = selectG.value;
  let stat = selectS.value;
  let filteredChar = [];

  if (gender != "Gender") {
    filteredChar.push("gender");
    if (filteredChar.length == 1) {
      preFilter = filterGender(preFilter, gender, true);
      print(preFilter);
    }
    else {
      preFilter = filterGender(preFilter, gender, false);
      print(preFilter);
    }
  }

  if (stat != "Status") {
    filteredChar.push("status");
    if (filteredChar.length == 1) {
      preFilter = filterStatus(preFilter, stat, true);
      print(preFilter);
    }
    else {
      preFilter = filterStatus(preFilter, stat, false);
      print(preFilter);
    }
  }
}

  // Buscador de Personajes
searchC.addEventListener("keyup", (e) => {
  const search = e.target.value.toLowerCase();
  const charact = characters.filter((results) => {
    return results.name.toLowerCase().includes(search); 
  });
  
  print(charact);
});

