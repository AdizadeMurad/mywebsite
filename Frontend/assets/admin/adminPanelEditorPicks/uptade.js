const form = document.querySelector("form");
const name = document.querySelector("#name");
const description = document.querySelector("#description");
const imgURL = document.querySelector("#imgURL");
const hash = window.location.hash.slice(1)

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

