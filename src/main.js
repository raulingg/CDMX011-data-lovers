import data from "./data/rickandmorty/rickandmorty.js";
import { filterGender/*, searchChar */} from "./data.js";
import { filterStat } from "./data.js";
import { sortBy } from "./data.js";

const characters = data.results;
let dataUpdate = characters;
const selectG = document.getElementById("gender");
const selectS = document.getElementById("status");
const selectSort = document.getElementById("sort");

/*const nameC = data.results.name; 
const searchC = document.getElementById("search1").value.toLowerCase();
*/

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

// Filtra por Genero
/* selectG.addEventListener("change", function ()){
  filtrado()
  pintar()//sacar y poner enmodo función los leemntos que pcupan para pntar en la pantalla
}
-definir un arreglo vacio let algo = [];
-definir variable que tenga el valor escojido ej: let genero= selectG.value
-definir un segundo arreglo vacio para medir cuantos arreglos ya tienes let datosprevios= [];
-crear las condicionales para cada tipo de filtrado
-if( genero != "Select an option" ){
datosPrevios.push("genero");
 if(datosPrevios.length == 1){
  algo = filterGender (algo, genero, true):
 }
  else {
    algo = ilterGender (algo, genero, false):
  }

}
*/

selectG.addEventListener("change", function (e) {
  dataUpdate = characters;
  const filterG = filterGender(dataUpdate, e.target.value);
  let screen = "";
  filterG.forEach((char) => {
    screen += characterHTML(char);
  });
  document.getElementById("root").innerHTML = screen;
  dataUpdate = filterG;
});



//Filtro status
selectS.addEventListener("change", function (e) {
  dataUpdate = characters;
  const filterS = filterStat(dataUpdate, e.target.value);
  let screen = "";
  filterS.forEach((char) => {
    screen += characterHTML(char);
  });
  document.getElementById("root").innerHTML = screen;

});

//a-z
selectSort.addEventListener("change", function (e) {
  dataUpdate = characters;
  const sortB = sortBy(dataUpdate, e.target.value);
  let screen = "";
  sortB.forEach((char) => {
    screen += characterHTML(char);
  });
  document.getElementById("root").innerHTML = screen;
  dataUpdate = sortB;
});

/* //Busqueda por personaje
document.getElementById("search").addEventListener("click", () => {
  const searchInput = document.getElementById("search").value;
  console.log(searchInput)
  let screen = "";
  

  });
  document.getElementById("root").innerHTML = screen;*/