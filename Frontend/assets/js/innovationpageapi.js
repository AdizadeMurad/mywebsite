const cardsinnovationlatestnews = document.querySelector(".cards");

function addCardmoreinnovation(newstitlemoreinnovation, imagemoreinnovation, descriptionmoreinnovation) {
  cardsinnovationlatestnews.innerHTML += `
  <div class="card-general">
  <img src="${imagemoreinnovation}" alt="">
<p class="xeber-header">${newstitlemoreinnovation}</p>
  <p class="xeber-text">${descriptionmoreinnovation}</p>
  <div class="source">
    <p class="source-text">source:newswith&MURAD</p>
    </div>
`; 
}
async function getAlldatamoreinnovation() {
  const res = await fetch("http://localhost:3000/moreinnovation");
  const data = await res.json();
  return data;
}

async function generalUImoreinnovation() {
  const datamoreinnovation = await getAlldatamoreinnovation();
  datamoreinnovation.forEach((item) =>
    addCardmoreinnovation(item.title, item.image, item.description)
  );
}
generalUImoreinnovation();





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