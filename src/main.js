import data from "./data/rickandmorty/rickandmorty.js";
import { filterGender } from "./data.js";
import { filterStat } from "./data.js";
import { sortBy } from "./data.js";

const characters = data.results;
const selectG = document.getElementById("gender");
const selectS = document.getElementById("status");
const selectSort = document.getElementById("sort");

// Pantalla Principal
window.onload = function printData() {
  let firstFive = "";
  characters.forEach((char) => {
    if (char.id <= 5) {
      firstFive += characterHTML(char);
      document.getElementById("root").innerHTML = firstFive;
    }
  });
};

// Pone en HTML

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

// Filtra por Genero
selectG.addEventListener("change", function (e) {
  const filterG = filterGender(characters, e.target.value);
  let screen = "";
  filterG.forEach((char) => {
    screen += characterHTML(char);
  });
  document.getElementById("root").innerHTML = screen;
});

//Filtro status
selectS.addEventListener("change", function (e) {
  const filterS = filterStat(characters, e.target.value);
  let screen = "";
  filterS.forEach((char) => {
    screen += characterHTML(char);
  });
  document.getElementById("root").innerHTML = screen;
});

selectSort.addEventListener("change", function (e) {
  const sortB = sortBy(characters, e.target.value);
  let screen = "";
  sortB.forEach((char) => {
    screen += characterHTML(char);
  });
  document.getElementById("root").innerHTML = screen;
});
