const tbody = document.querySelector("tbody");

function addCard(id, newstitle, image, description) {
  const tr = document.createElement("tr");
  tr.innerHTML += `
  <td "><img id="table-image" src="${image}" alt=""></td>
  <td ">${newstitle}</td>
  <td>${description}</td>
 <td><div class="general-btn-admin">    
 <button  id="delete">delete <i class="fa-solid fa-trash"></i></button>
  <a href="uptade.html#${id}"><button  id="edit">edit <i class="fa-solid fa-pencil"></i></button></a></div>

 </td>
`;
  const del = tr.querySelector("#delete");
  del.addEventListener("click", async function (e) {
    e.preventDefault();
    await deleteProducts(id);
  });
  tbody.appendChild(tr);
}

async function getAlldata() {
  const res = await fetch("http://localhost:3000/mehsul");
  const data = await res.json();
  return data;
}

async function generalUI() {
  const data = await getAlldata();
  data.forEach((item) =>
    addCard(item.id, item.title, item.image, item.description)
  );
}
generalUI();

async function deleteProducts(id) {
  const res = await fetch("http://localhost:3000/mehsul/" + id, {
    method: "delete",
  });
  const data = await res.json();
  alert(id);
  return data;
}





const form = document.querySelector("form");
const name = document.querySelector("#name");
const description = document.querySelector("#description");
const imgURL = document.querySelector("#imgURL");

const add = document.querySelector("#add");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  await addProducts(name.value, imgURL.value, description.value);
});

async function addProducts(title, image, description) {
  const res = await fetch("http://localhost:3000/mehsul", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      image,
      description,
    }),
  });
  const data = await res.json();
  return data;
}


async function fullfill() {
  const allData = await getBYID(hash)
  name.value=allData.title
  description.value=allData.description
  imgURL.value=allData.image
}
fullfill()


form.addEventListener("submit", async function (e) {
  e.preventDefault();
 await uptadeProducts(hash,name.value,imgURL.value,description.value);
 window.location.href = "./admin.Panel.html"
});



async function getBYID(id) {
  const res = await fetch("http://localhost:3000/mehsul/"+id);
  const data = await res.json();
  return data;
}

async function uptadeProducts(id,title, image, description) {
  const res = await fetch("http://localhost:3000/mehsul/"+id, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      image,
      description,
    }),
  });
  const data = await res.json();
  return data;
}