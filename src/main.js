import {name,sport,paisito} from './data.js';
import data from './data/athletes/athletes.js';

let titulo = document.getElementById("olympics-title");
let divAthletes =  document.getElementById("athletes");
let selectPais = document.getElementById("pais")

selectPais.addEventListener("change",function(e){
   let filterData= paisito(e.target.value);
   if(filterData){

   }
})


titulo.innerHTML = data.games + " Ciudad: "+data.city;

funtion showData () { data.athletes.forEach(atleta => {
    const ul = document.createElement("ul");
    const aName = document.createElement("li");
        aName.innerHTML = "Nombre: " + atleta.name;
    const aSport = document.createElement("li");
        aSport.innerHTML = atleta.sport;
    const aTeam = document.createElement("li");
        aTeam.innerHTML = atleta.team;
    const aEvent = document.createElement("li");
        aEvent.innerHTML = atleta.event;
    const aMedal = document.createElement("li");
        aMedal.innerHTML = atleta.medal;
    const aGender = document.createElement("li");
        aGender.innerHTML = atleta.gender;
    const aAge = document.createElement("li");
        aAge.innerHTML = atleta.age;
    const aWeight = document.createElement("li");
        aWeight.innerHTML = atleta.weight;
    const aHeight = document.createElement("li");
        aHeight.innerHTML = atleta.height;
    const aNoc = document.createElement("li");
        aNoc.innerHTML = atleta.noc;    
    ul.appendChild(aName);
    ul.appendChild(aAge);
    ul.appendChild(aGender);
    ul.appendChild(aAge);
    ul.appendChild(aWeight);
    ul.appendChild(aHeight);
    ul.appendChild(aTeam);
    ul.appendChild(aNoc);
    ul.appendChild(aSport);
    ul.appendChild(aEvent);
    ul.appendChild(aMedal);
   
        divAthletes.appendChild(ul);
})
};