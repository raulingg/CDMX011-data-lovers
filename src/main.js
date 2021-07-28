import {searchByTeam} from './data.js';
import{searchBySport} from './data.js';
import{searchByGender}from'./data.js';
import{searchByMedal} from'./data.js';
//import athletes from './data/athletes/athletes.js';
//import data from './data/athletes/athletes.js';

/*let titulo = document.getElementById("olympics-title");
*/
const firstPage= document.querySelector(".reseña");
let divAthletes =  document.getElementById("athletes");
let selectPais = document.getElementById("pais")
let selectSport= document.getElementById("deportes")
let selectGender=document.getElementById("genero")
let selectMedal = document.getElementById("medallas")
let pagination = document.getElementById("pagination");
let avatar = 12;
let currentPage = 1;
console.log("firstpage" + firstPage);
showSuccess(false);
document.querySelector(".button").addEventListener("click", reset);

selectPais.addEventListener("change",function(){
    filtrar();
    showSuccess(true);
 })

 selectSport.addEventListener("change",function(){
    filtrar();
    showSuccess(true);
 })

 selectGender.addEventListener("change",function(){
    filtrar();
    showSuccess(true);
 })
 
 selectMedal.addEventListener("change",function(){
    filtrar();
    showSuccess(true);
 })

 function filtrar(){
    let items = [];//determinamos el array vacio para que lo ocupe dataX cuando se hace una busqueda previa
    let pais = selectPais.value;
    let deporte = selectSport.value;
    let genero = selectGender.value;
    let medal = selectMedal.value;
    divAthletes.innerHTML = "";
    pagination.innerHTML = "";
    //console.log("Deporte: " + deporte);
    //console.log("pais: " + pais);
    //console.log("genero: " + genero);
    //console.log("medalla: " + medal);

    if(pais != "Selecciona un pais"){
       if(items.length == 0){
           items = searchByTeam(items,pais, true);
       }
       items = searchByTeam(items,pais, false);
       //console.log(items);
    }

    if(deporte != "Selecciona una Disciplina"){
        if(items.length == 0){
            items=searchBySport(items, deporte, true);
        }
        items = searchBySport(items, deporte, false);
        
    }

    if (genero != "Selecciona el género"){
        if (items.length== 0){
            items = searchByGender(items,genero, true);
        }
        items= searchByGender(items, genero, false);
        
    }

    if(medal != "Selecciona una medalla" ){
        //console.log("traigo esta medalla: "+medal);
        if (items.length == 0){
            items = searchByMedal(items, medal, true);
        }
        items = searchByMedal(items, medal, false);
    }
    if(items.length == 0){
        divAthletes.innerHTML= "Tu busqueda no obtuvo resultados. Realiza una nueva";
    }
        //console.log(items);
    setupPagination(items, pagination, avatar );
    DisplayList( items, divAthletes, avatar, currentPage);
 }

function setupPagination (items, wrapper,avatarPerPage){
    wrapper.inderHtml="";

    let pageCount = Math.ceil(items.length / avatarPerPage);
    //console.log("page_count"+page_count);
    for(let i = 1; i < pageCount + 1; i++) {
       //console.log("estoy en la pagina "+i);
        let btn = paginationButton(i,items);
        wrapper.appendChild(btn);
    }
    //console.log("Esto tiene el wrapper");
    //console.log(wrapper);
}
function showSuccess(esconder) {
    firstPage.hidden = esconder;
  }
  
function reset(){
    
}
function DisplayList (items, divAthletes, avatarPerPage, page) {
    page--;
    let loopStart = avatarPerPage * page;
    //console.log(loopStart)
    let paginatedItems = items.slice (loopStart, loopStart + avatarPerPage);
    //console.log(paginatedItems);
    paginatedItems.forEach(a => divAthletes.appendChild(obtenerElementoAtleta(a)))
}
function paginationButton(page, items) {
    let button = document.createElement("button");
    button.value= page;
    let currentPage = page;
    button.innerText = button.value;
    button.setAttribute("id", "btn");
    //console.log("Boton creado "+ button.value);
    if(currentPage == page);button.classList.add("active");
    button.addEventListener("click", function (){
        divAthletes.innerHTML="";
        DisplayList( items, divAthletes, avatar, currentPage);
       /* let currentBtn = document.querySelector("#btn button.active")
        currentBtn.classList.remove("active");
        button.classList.add("active");*/
    });
    return button;
}

function obtenerElementoAtleta(atleta){
    const div = document.createElement("div");
    div.classList.add("collection");
    let divContainerImage = document.createElement("div");
    divContainerImage.classList.add("circular_landscape");
    let img = document.createElement("IMG");
    img.src= "images/"+atleta.gender+".png";
    divContainerImage.appendChild(img);
    div.appendChild(divContainerImage);
    const aName = document.createElement("div");
        aName.innerHTML =  atleta.name;
        aName.classList.add("name_athlet");
    const aSport = document.createElement("div");
        aSport.innerHTML = "Deporte: " + atleta.sport;
    const aTeam = document.createElement("div");
        aTeam.innerHTML = "Pais: " + atleta.team + " ("+ atleta.noc + ")";
        aTeam.classList.add("team_athlet");
    const aEvent = document.createElement("div");
        aEvent.innerHTML = "Evento: " + atleta.event;
    const aMedal = document.createElement("div");
        aMedal.innerHTML = "Medalla: " + atleta.medal;
        aMedal.classList.add("medall");
    const aGender = document.createElement("div");
        aGender.innerHTML = "Genero: " + atleta.gender;
    const aAge = document.createElement("div");
        aAge.innerHTML = "Edad: " + atleta.age + " años";
    const aWeight = document.createElement("div");
        aWeight.innerHTML = "Peso: " + atleta.weight + " kg";
    const aHeight = document.createElement("div");
        aHeight.innerHTML = "Estatura: " + atleta.height + " cm";    
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