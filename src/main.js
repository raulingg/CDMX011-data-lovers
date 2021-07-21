import { searchByTeam} from './data.js';
//import athletes from './data/athletes/athletes.js';
import data from './data/athletes/athletes.js';

/*let titulo = document.getElementById("olympics-title");
*/
let divAthletes =  document.getElementById("athletes");

let selectPais = document.getElementById("pais")



selectPais.addEventListener("change",function(e){
    divAthletes.innerHTML = "";
    const items = searchByTeam(e.target.value);
    DisplayList( items, listElement, rows, current_page);
});

function obtenerElementoAtleta(atleta){
    const ul = document.createElement("ul");
    ul.classList.add("collection");
    const aName = document.createElement("p");
        aName.innerHTML = "Nombre: " + atleta.name;
        aName.classList.add("collection-item");
        aName.classList.add("avatar");
    const aSport = document.createElement("p");
        aSport.innerHTML = "Deporte: " + atleta.sport;
    const aTeam = document.createElement("p");
        aTeam.innerHTML = "Pais: " + atleta.team + " ("+ atleta.noc + ")";
    const aEvent = document.createElement("p");
        aEvent.innerHTML = "Evento: " + atleta.event;
    const aMedal = document.createElement("p");
        aMedal.innerHTML = "Medalla: " + atleta.medal;
    const aGender = document.createElement("p");
        aGender.innerHTML = "Genero: " + atleta.gender;
    const aAge = document.createElement("p");
        aAge.innerHTML = "Edad: " + atleta.age + " años";
    const aWeight = document.createElement("p");
        aWeight.innerHTML = "Peso: " + atleta.weight + " kg";
    const aHeight = document.createElement("p");
        aHeight.innerHTML = "Estatura: " + atleta.height + " cm";    
    ul.appendChild(aName);
    ul.appendChild(aAge);
    ul.appendChild(aGender);
    ul.appendChild(aAge);
    ul.appendChild(aWeight);
    ul.appendChild(aHeight);
    ul.appendChild(aTeam);
    ul.appendChild(aSport);
    ul.appendChild(aEvent);
    ul.appendChild(aMedal);
    return ul;
}

const listElement= document.getElementById("list");
const paginationElementos= document.getElementById("pagination");

let current_page = 2;
let rows = 5;

function DisplayList (items, wrapper, rows_per_page, page) {
    wrapper.innerHTML = "";
    page--;

    let loopStart = rows_per_page * page;
    let paginatedItems = items.slice (loopStart, loopStart + rows_per_page);
    console.log(paginatedItems);
    //for (let i = loopStart; i < loopStart + rows_per_page; i++) {
    paginatedItems.forEach(a => divAthletes.appendChild(obtenerElementoAtleta(a)))
}
 

/*titulo.innerHTML = data.games + " Ciudad: "+data.city;
let cards= function showData () {
    data.athletes.forEach(function(atleta){

   
        divAthletes.appendChild(ul);
    })
}
console.log(cards);
*/