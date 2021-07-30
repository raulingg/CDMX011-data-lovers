import { searchByTeam } from "./data.js";
import { searchBySport } from "./data.js";
import { searchByGender } from "./data.js";
import { searchByMedal } from "./data.js";
console.log(searchByTeam);
//import athletes from './data/athletes/athletes.js';
//import data from './data/athletes/athletes.js';

/*let titulo = document.getElementById("olympics-title");
 */
const firstPage = document.querySelector(".reseña");
//const  cardSection= document.querySelector(".allCards");
let ocultarPaginacion = document.querySelector("#hidePagination");
let imgNoResult = document.getElementById("root")
let divAthletes = document.getElementById("athletes");
let selectPais = document.getElementById("pais");
let selectSport = document.getElementById("deportes");
let selectGender = document.getElementById("genero");
let selectMedal = document.getElementById("medallas");
let pagination = document.getElementById("pagination");
let avatar = 12;
let currentPage = 1;
//console.log("firstpage" + firstPage);
hideFpageBtn(false);

document.querySelector(".button").addEventListener("click", reset);

selectPais.addEventListener("change", function () {
  filtrar();
  hideFpageBtn(true);
});

selectSport.addEventListener("change", function () {
  filtrar();
  hideFpageBtn(true); 
  
});

selectGender.addEventListener("change", function () {
  filtrar();
  hideFpageBtn(true);
});

selectMedal.addEventListener("change", function () {
  filtrar();
  hideFpageBtn(true);

});

function filtrar() {
  let items = []; //determinamos el array vacio para que lo ocupe dataX cuando se hace una busqueda previa
  let pais = selectPais.value;
  let deporte = selectSport.value;
  let genero = selectGender.value;
  let medal = selectMedal.value;
  divAthletes.innerHTML = "";
  pagination.innerHTML = "";

  let opcionesSeccionadas = [];
  //console.log("Deporte: " + deporte);
  //console.log("pais: " + pais);
  //console.log("genero: " + genero);
  //console.log("medalla: " + medal);

  if (pais != "Selecciona un pais") {
    opcionesSeccionadas.push("pais");
    if (opcionesSeccionadas.length == 1) {
      items = searchByTeam(items, pais, true);
    }
    items = searchByTeam(items, pais, false);
    //console.log(items);
  }

  if (deporte != "Selecciona una Disciplina") {
    opcionesSeccionadas.push("disciplina");
    if (opcionesSeccionadas.length == 1) {
      items = searchBySport(items, deporte, true);
    }
    items = searchBySport(items, deporte, false);
  }

  if (genero != "Selecciona el género") {
    opcionesSeccionadas.push("genero");
    if (opcionesSeccionadas.length == 1) {
      items = searchByGender(items, genero, true);
    }
    items = searchByGender(items, genero, false);
  }

  if (medal != "Selecciona una medalla") {
    //console.log("traigo esta medalla: "+medal);
    opcionesSeccionadas.push("medalla");
    if (opcionesSeccionadas.length == 1) {
      items = searchByMedal(items, medal, true);
    }
    items = searchByMedal(items, medal, false);
  }
  imgNoResult.hidden = !items.length == 0;
  //console.log(items);
  if(items.length > 0){
    setupPagination(items, pagination, avatar);
    DisplayList(items, divAthletes, avatar, currentPage);
  }
}

function setupPagination(items, wrapper, avatarPerPage) {
  wrapper.inderHtml = "";

  let pageCount = Math.ceil(items.length / avatarPerPage);
  //console.log("page_count"+page_count);
  for (let i = 1; i < pageCount + 1; i++) {
    //console.log("estoy en la pagina "+i);
    let btn = paginationButton(i, items);
    wrapper.appendChild(btn);
  }
  //console.log("Esto tiene el wrapper");
  //console.log(wrapper);
}


function reset() {
  selectPais.value = "Selecciona un pais";
  selectSport.value = "Selecciona una Disciplina";
  selectGender.value = "Selecciona el género";
  selectMedal.value = "Selecciona una medalla";
  divAthletes.innerHTML = "";
  hideFpageBtn(false);
  imgNoResult.hidden=true;
}
function hideFpageBtn(ocultar) {
    firstPage.hidden = ocultar;
    ocultarPaginacion.hidden = !ocultar;
  }
  
function DisplayList(items, divAthletes, avatarPerPage, page) {
  page--;
  let loopStart = avatarPerPage * page;
  //console.log(loopStart)
  let paginatedItems = items.slice(loopStart, loopStart + avatarPerPage);
  //console.log(paginatedItems);
  paginatedItems.forEach((a) =>
    divAthletes.appendChild(obtenerElementoAtleta(a))
  );
}
function paginationButton(page, items) {
  let button = document.createElement("button");
  button.value = page;
  let currentPage = page;
  button.innerText = button.value;
  // button.classList.add("botoncito");
  //console.log("Boton creado "+ button.value);
  if (currentPage == page);
  button.addEventListener("click", function () {
    divAthletes.innerHTML = "";
    DisplayList(items, divAthletes, avatar, currentPage);
    buttonActive(currentPage, page, button);
    imgNoResult.hidden=true;
  });
  return button;
}
function buttonActive(currentPage, page, button) {
  currentPage == page;
  let currentBtn = document.querySelector(".botoncito button.active");
  button.classList.add("active");
  currentBtn.classList.remove("active");
}

function obtenerElementoAtleta(atleta) {
  const div = document.createElement("div");
  div.classList.add("collection");
  let divContainerImage = document.createElement("div");
  divContainerImage.classList.add("circular_landscape");
  let img = document.createElement("IMG");
  img.src = "images/" + atleta.gender + ".png";
  divContainerImage.appendChild(img);
  div.appendChild(divContainerImage);
  const aName = document.createElement("div");
  aName.innerHTML = atleta.name;
  aName.classList.add("name_athlet");
  const aSport = document.createElement("div");
  aSport.innerHTML = "Deporte: " + atleta.sport;
  aSport.classList.add("dato");
  const aTeam = document.createElement("div");
  aTeam.innerHTML = "Pais: " + atleta.team + " (" + atleta.noc + ")";
  aTeam.classList.add("team_athlet");
  const aEvent = document.createElement("div");
  aEvent.innerHTML = "Evento: " + atleta.event;
  aEvent.classList.add("dato");
  const aMedal = document.createElement("div");
  aMedal.innerHTML = "Medalla: " + atleta.medal;
  aMedal.classList.add("medall");
  const aGender = document.createElement("div");
  aGender.innerHTML = "Genero: " + atleta.gender;
  aGender.classList.add("dato");
  const aAge = document.createElement("div");
  aAge.innerHTML = "Edad: " + atleta.age + " años";
  aAge.classList.add("dato");
  const aWeight = document.createElement("div");
  aWeight.innerHTML = "Peso: " + atleta.weight + " kg";
  aWeight.classList.add("dato");
  const aHeight = document.createElement("div");
  aHeight.innerHTML = "Estatura: " + atleta.height + " cm";
  aHeight.classList.add("dato");
  div.appendChild(aName);
  div.appendChild(aTeam);
  div.appendChild(aMedal);
  div.appendChild(aSport);
  div.appendChild(aEvent);
  div.appendChild(aGender);
  div.appendChild(aAge);
  div.appendChild(aWeight);
  div.appendChild(aHeight);
  return div;
}

/*titulo.innerHTML = data.games + " Ciudad: "+data.city;
let cards= function showData () {
    data.athletes.forEach(function(atleta){

   
        divAthletes.appendChild(ul);
    })
}
console.log(cards);
*/
