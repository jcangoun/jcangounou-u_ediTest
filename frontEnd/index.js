
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
async function getCats() {
  try {
    const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=30");

    if (!response.ok) {
      throw new Error("Erreur réseau : " + response.status);
    }

    const data = await response.json();

    console.log("Nombre d'images reçues :", data.length);

    data.forEach((cat, index) => {
      console.log(`--- Chat n°${index + 1} ---`);
      console.log("ID :", cat.id);
      console.log("URL :", cat.url);
      console.log("Largeur :", cat.width);
      console.log("Hauteur :", cat.height);
    });

  } catch (err) {
    console.error("Erreur :", err);
  }
}

getCats();






// .then(console.log(response))
// .catch(error);

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

function tableau() { }
function pokemon() { }

// Style de elementTest
