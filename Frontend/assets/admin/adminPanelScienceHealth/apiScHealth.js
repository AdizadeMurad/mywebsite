const cardschealth = document.querySelector(".card-great-reads");

function addCard(newstitle, image, description) {
  cards.innerHTML += `
  <div class="card-general-great-reads">
  <img src="${image}" alt="">
<p class="xeber-header">${newstitle}</p>
  <p class="xeber-text">${description}</p>
  <div class="source">
    <p class="source-text">source</p>
    </div>
`; 
}
async function getAlldata() {
  const res = await fetch("http://localhost:3000/greatread");
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