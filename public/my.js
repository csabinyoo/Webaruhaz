const url = "http://localhost:3000/products/"

fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data));