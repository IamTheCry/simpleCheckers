const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/src/index.html')
})

app.listen(3000, function () {
  console.log('Checkers listening on port 3000!')
})