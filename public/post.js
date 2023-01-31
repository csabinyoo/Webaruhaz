const url = "http://localhost:3000/products/"

async function postProduct(){
    let body = {
        name: document.getElementById("name").value,
        quantity: +document.getElementById("quantity").value,
        price: +document.getElementById("price").value,
        type: document.getElementById("type").value
    }

    body = JSON.stringify(body);
    
    let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: body
      })
}