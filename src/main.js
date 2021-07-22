import { searchByTeam} from './data.js';
//import athletes from './data/athletes/athletes.js';
//import data from './data/athletes/athletes.js';

/*let titulo = document.getElementById("olympics-title");
*/
let divAthletes =  document.getElementById("athletes");

let selectPais = document.getElementById("pais")

let pagination = document.getElementById("pagination");

let currentPage = 1;
let rows = 5;

selectPais.addEventListener("change",function(e){
    divAthletes.innerHTML = "";
    pagination.innerHTML = "";
    const items = searchByTeam(e.target.value);
    setupPagination(items, pagination, rows );
    DisplayList( items, divAthletes, rows, currentPage);
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





function DisplayList (items, wrapper, rows_per_page, page) {
    page--;

    let loopStart = rows_per_page * page;
    let paginatedItems = items.slice (loopStart, loopStart + rows_per_page);
    console.log(paginatedItems);
    paginatedItems.forEach(a => wrapper.appendChild(obtenerElementoAtleta(a)))
}

function setupPagination (items, wrapper,rows_per_page){
    wrapper.inderHtml="";

    let page_count = Math.ceil(items.length / rows_per_page);
    console.log("page_count"+page_count);
    for(let i = 1; i < page_count + 1; i++) {
       console.log("estoy en la pagina "+i);
        let btn = paginationButton(i);
        wrapper.appendChild(btn);
    }
    //console.log("Esto tiene el wrapper");
    //console.log(wrapper);
}

function paginationButton(page) {
    let button = document.createElement("button");
    button.innerText = page;
    button.setAttribute("id", "btn");
    button.value= page;
    //console.log("Boton creado "+ button.value);
    if(currentPage == page);//button.classList.add("active");
    button.addEventListener("click", function (){
        currentPage = button.value;
        alert("esto es"+ currentPage);
        

       /* let currentBtn = document.querySelector("#btn button.active")
        currentBtn.classList.remove("active");
        button.classList.add("active");*/
        
    });

    return button;
}
 

/*titulo.innerHTML = data.games + " Ciudad: "+data.city;
let cards= function showData () {
    data.athletes.forEach(function(atleta){

   
        divAthletes.appendChild(ul);
    })
}
console.log(cards);
*/