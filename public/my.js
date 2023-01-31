const url = "http://localhost:3000/products/"


async function getProducts(){
    let response = await fetch(url);
    let data = await response.json();
    let products = data;
    viewTable(products);
};

function viewTable(products){
    let trHTML = "";
    for (const product of products){
       trHTML += `<tr>`;
       for (const key in product) {
          trHTML += `<td>${product[key]}</td>`
        }
       }
       trHTML += `</tr>`;
       document.getElementById("tbody").innerHTML = trHTML;
}
getProducts();