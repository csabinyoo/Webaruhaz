# Json szerver

## projekt inicializálása
`npm init -y`

## Telepítendő modulok

- npm i --save express  `Ez a szerverünk`
- npm install sanitize-html `XSS védelem`
- npm install uniqid `Egyedi azonosító(id)`

Telepítés egyszerre:
- `npm i express sanitize-html uniqid`

# Express server
- Branch: `01_Express`
```js
const express = require('express')
const app = express()
let port = 3000

app.get('/products', function (req, res) {
  res.send('Hello World')
})

app.listen(port, ()=> {
  console.log(`Express server ok. port: ${port}`);
})
```

# Adatszerkezet
- Branch: `02_Read_Products(tanár úrnál: Adatszerkezet)`
```json
product = {
    "id": "string",
    "name": "string",
    "quantity": "int",
    "price": "number",
    "type": "string"
}
```

# 3 get, filesystem
- Branch: `03_Get_FileSystem`
```rest
### get products
get http://localhost:3000/products

### get products by id
get http://localhost:3000/products/apcj6tclbfhqung3
```