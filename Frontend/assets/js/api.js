// Editor Picks api


const cards = document.querySelector(".cards");

function addCard(newstitle, image, description) {
  cards.innerHTML += `
  <div class="card-general">
  <img src="${image}" alt="">
<p class="xeber-header">${newstitle}</p>
  <p class="xeber-text">${description}</p>
  <div class="source">
    <p class="source-text">source:newswith&MURAD</p>
    </div>
`; 
}
async function getAlldata() {
  const res = await fetch("http://localhost:3000/mehsul");
  const data = await res.json();
  return data;
}

async function generalUI() {
  const data = await getAlldata();
  data.forEach((item) =>
    addCard(item.title, item.image, item.description)
  );
}
generalUI();


// Great Reads api

const cardsgreatreads = document.querySelector(".card-great-reads");

function addCardgreatreads(newstitlegreatreads, imagegreatreads, descriptiongreatreads) {
    cardsgreatreads.innerHTML += `
  <div class="card-general-great-reads">
  <img src="${imagegreatreads}" alt="">
<p class="xeber-header">${newstitlegreatreads}</p>
  <p class="xeber-text">${descriptiongreatreads}</p>
  <div class="source">
    <p class="source-text">source:newswith&MURAD</p>
    </div>
`; 
}
async function getAlldatagreatreads() {
  const res = await fetch("http://localhost:3000/greatread");
  const data = await res.json();
  return data;
}

async function generalUIgreatreads() {
  const data = await getAlldatagreatreads();
  data.forEach((item) =>
    addCardgreatreads(item.title, item.image, item.description)
  );
}
generalUIgreatreads();



// Science-Health api



const cardsschealth = document.querySelector(".card-sc-health");

function addCardschealth(newstitleschealth, imageschealth, descriptionschealth) {
    cardsschealth.innerHTML += `
  <div class="card-general-sc-health">
  <img src="${imageschealth}" alt="">
<p class="xeber-header">${newstitleschealth}</p>
  <p class="xeber-text">${descriptionschealth}</p>
  <div class="source">
    <p class="source-text">source:newswith&MURAD</p>
    </div>
`; 
}
async function getAlldataschealth() {
  const res = await fetch("http://localhost:3000/science.health");
  const data = await res.json();
  return data;
}

async function generalUIschealth() {
  const data = await getAlldataschealth();
  data.forEach((item) =>
    addCardschealth(item.title, item.image, item.description)
  );
}
generalUIschealth();