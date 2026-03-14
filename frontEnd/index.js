
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
// API de de dog
fetch(`https://api.thecatapi.com/v1/images/search`)
.then()
.then()
.catch();

// Style de elementTest

function tableau() { }
function pokemon() { }