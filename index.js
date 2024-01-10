const express = require('express')
const app = express()
const port = 3000
const randomstring = require("randomstring");

app.get('/', (req, res) => {
  const str = randomstring.generate({
    length: 12,
    charset: 'alphabetic'
  });
  res.send(str)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
