const express = require('express')
const app = express()
let port = 3000

app.get('/products', function (req, res) {
  res.send('Hello Worldd')
})

app.listen(port, ()=> {
  console.log(`Express server ok. port: ${port}`);
})