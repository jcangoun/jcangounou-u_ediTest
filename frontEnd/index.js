
const infoDansUrl= window.location.search;


const body = document.querySelector("body");
const enTete = document.querySelector("header");
// console.log(body);
body.appendChild(enTete);
// enTete.setAttribute = ('id', 'lentete');
enTete.id = ('lentete');

body.style.backgroundColor = "pink";
body.style.opacity = "0,5";

const navette = document.querySelector("nav");
navette.classList.add("navigtn");
console.log(navette);
console.log(enTete);
const elementTest = document.createElement("div");
elementTest.textContent = ("phrase de test dom ");
navette.appendChild(elementTest);


const leMain = document.querySelector("main");


// API de de dog
fetch(`https://api.thecatapi.com/v1/images/search`)
.then(function (response) {
    return  response.json();
})
.then(console.log(response))
.catch(error);

// API de météo
// fetch(`https://api.open-meteo.com/v1/forecast?latitude=48.85&longitude=2.35&hourly=temperature_2m`)
// .then(masse)
// .then()
// .catch();

// API de API Ghibli
// fetch(`https://ghibliapi.vercel.app/films`)
// .then(ghibli)
// .then()
// .catch();

// API DE HARRYPOTTER
// fetch(`hp-api.onrender.com/api/characters`)
// .then(sorciers)
// .then()
// .catch();

// function tableau() { };
// function pokemon() { };

// Style de elementTest
