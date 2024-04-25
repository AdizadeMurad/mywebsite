const cardsculturelatestnews = document.querySelector(".cards");

function addCardculturelatestnews(newstitleculturelatestnews, imageculturelatestnews, descriptionculturelatestnews) {
  cardsculturelatestnews.innerHTML += `
  <div class="card-general">
  <img src="${imageculturelatestnews}" alt="">
<p class="xeber-header">${newstitleculturelatestnews}</p>
  <p class="xeber-text">${descriptionculturelatestnews}</p>
  <div class="source">
    <p class="source-text">source:newswith&MURAD</p>
    </div>
`; 
}
async function getAlldataculturelatestnews() {
  const res = await fetch("http://localhost:3000/culturelatestnews");
  const data = await res.json();
  return data;
}

async function generalUIculturelatestnews() {
  const dataculturelatestnews = await getAlldataculturelatestnews();
  dataculturelatestnews.forEach((item) =>
    addCardculturelatestnews(item.title, item.image, item.description)
  );
}
generalUIculturelatestnews();




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
