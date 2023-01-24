const express = require('express')
const app = express()
let port = 3000
const fs = require('fs');

const dataFile = "./data/products.json"

app.get('/products', function (req, res) {
  fs.readFile(dataFile, (error, data) => {
    let products = data;
    res.writeHeader('Content-Type','charset=utf-8');
    res.end(products)
  })
})

app.listen(port, ()=> {
  console.log(`Express server ok. port: ${port}`);
})