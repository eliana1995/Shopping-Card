let card = document.getElementById("card");

const url = `https://fakestoreapi.com/products`;
fetch(url)
  .then((response) => response.json())
  .then((data) => displayProduct(data));

const displayProduct = (products) => {
  for (product of products) {
    const displayProduct = document.getElementById("display-product");
    const div = document.createElement("div");
    div.innerHTML = `
    <div id="products-div">
        <div>
            <img src="${product.image}" alt="">
        </div>
        <div>
              <b>Product - ${product.id}</b>
              <h5 id="product-title">${product.title}</h5>
              <h2 id="product-price">Price: ${product.price}</h2>
              <b>Rating: ${product.rating.rate}⭐</b>
              <p>Count: ${product.rating.count}</p>
              <div class="products-button">
                <button  class="btn btn-primary" onclick="toCard(${product.id},${product.price})" >Buy Now</button>
                <button id="btn" class="btn btn-secondary">Details</button>
              </div>
              <h5 id="product-category">Category: ${product.category}</h5>
              <p id="description">${product.description}</p>
        </div>
    </div>
        `;
    displayProduct.appendChild(div);
  }
};

function toCard(id, price) {
  console.log(id, price);
  let svaeCard = {
    id: id,
    price: price,
  };

  localStorage.setItem(svaeCard.id, JSON.stringify(svaeCard));

  if (localStorage.length !== 0) {
    Object.keys(localStorage).forEach(function (key) {
      let product = JSON.parse(localStorage.getItem(key));

      card.innerHTML = " your products price is" + product.price;
    });
  }
}
