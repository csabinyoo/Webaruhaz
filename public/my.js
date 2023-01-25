const url = "http://localhost:3000/products/"

async function getProducts(){
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
};
getProducts();

async function postProduct(){
    let body = {
        name: "Á66",
        quantity: 24,
        price: 6500,
        type: "fémáru"
    }
    let response = await fetch (url, {
        Method: 'POST',
        Headers: {
            Accept: 'application.json',
            'Content-Type': 'appliaction/json'
        },
        Body: body,
        Cache: 'default'
    })
};