const api = "https://fakestoreapi.com/products";

async function getData() {
  const response = await fetch(api);
  const data = await response.json();

  printData(data);
}
function printData(data) {
  const header = document.querySelector("#header");
  const content = document.querySelector("#content");

  header.innerHTML += `<select class= "form-control" onchange="getProduct(this.value)">
  <option> please select</option>
  ${data.map(product =>  `<option>${product.category}</option>`)}
</select>
`

}

async function getProduct(e){
   const response = await fetch(`${api}?sort=desc${e}`)
    const data = await response.json()
   
    console.log(data)

    content .innerHTML= 
    `<h2>${data[0].title} (${data[0].price} )</h2>
   <img src="${data[0].image}" width="100">
   `
    }

    getData();