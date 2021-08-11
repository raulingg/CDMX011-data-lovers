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
window.onload = function printData() {
  let firstFiveHTML = "";
  characters.map((char) => {
    if (char.id <= 5) {
      firstFiveHTML += characterHTML(char);
      root.innerHTML = firstFiveHTML;
    }
  });
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
    limpiartodo()
    let newDataSort = sortDe(characters)
    print(newDataSort)
  }else if(e.target.value == "az"){
    limpiartodo()
    let newDataSort = sortAs(characters)
    print (newDataSort)
  }
});


// Función de imprimir 
function print(a) {
  let screen = "";
  a.map((char) => {
    screen += characterHTML(char);
    return document.getElementById("root").innerHTML = screen;
  });
}

function limpiartodo(){
  while(root.firstChild){
    root.removeChild(root.firstChild)
  }
}

// Funcion que cruza filtrados 
function filter() {
  let preFilter = [];
  let gender = selectG.value;
  let stat = selectS.value;
  let filteredChar = [];

  if (gender != "Gender") {
    filteredChar.push("gender");
    if (filteredChar.length == 1) {
      limpiartodo();
      preFilter = filterGender(preFilter, gender, true);
      print(preFilter);
    }
    else {
      limpiartodo();
      preFilter = filterGender(preFilter, gender, false);
      print(preFilter);
    }
  }

  if (stat != "Status") {
    filteredChar.push("status");
    if (filteredChar.length == 1) {
      limpiartodo();
      preFilter = filterStatus(preFilter, stat, true);
      print(preFilter);
    }
    else {
      limpiartodo();
      preFilter = filterStatus(preFilter, stat, false);
      print(preFilter);
    }
  }
  }

  // Buscador de Personajes
  searchC.addEventListener("keyup", (e) => {
    limpiartodo();
const search = e.target.value.toLowerCase();
const charact = characters.filter((results) => {
  return results.name.toLowerCase().includes(search); 
});
  print(charact);
  });

