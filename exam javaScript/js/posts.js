const urlOnePost = "https://fakestoreapi.com/products/1";
const urlAllPosts = "https://fakestoreapi.com/products";

let data1 = fetch(urlOnePost)
  .then((res) => res.json())
  .then((json) => console.log(json));

let data2 = fetch(urlAllPosts)
  .then((response) => response.json())
  .then((json) => console.log(json));

let data3 = fetch(urlAllPosts)
  .then((response) => response.json())
  .then((json) => {
    json.forEach((element) => {
      console.log(element);
    });
  });

fetch(urlAllPosts, {
  method: "POST",
  body: JSON.stringify({
    title: "test product",
    price: 13.5,
    description: "lorem ipsum set",
    image: "https://i.pravatar.cc",
    category: "electronic",
  }),
})
  .then((res) => res.json())
  .then((json) => console.log(json));

fetch(urlOnePost, {
  method: "PUT",
  body: JSON.stringify({
    title: "test product",
    price: 13.5,
    description: "lorem ipsum set",
    image: "https://i.pravatar.cc",
    category: "electronic",
  }),
})
  .then((res) => res.json())
  .then((json) => console.log(json));

fetch(urlOnePost, {
  method: "PATCH",
  body: JSON.stringify({
    title: "test product",
    price: 13.5,
    description: "lorem ipsum set",
    image: "https://i.pravatar.cc",
    category: "electronic",
  }),
})
  .then((res) => res.json())
  .then((json) => console.log(json));

const jewelry = [
  {
    title: " product 1",
    price: 1200,
    description: "lorem ipsum set",
    image: "",
    category: "jewelry",
  },
  {
    title: " product 2",
    price: 120,
    description: "lorem ipsum set",
    image: "",
    category: "jewelry",
  },
];

fetch(urlAllPosts, {
  method: "POST",
  body: JSON.stringify(jewelry),
})
  .then((res) => res.json())
  .then((json) => console.log(json));
