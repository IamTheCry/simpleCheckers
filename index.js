const express = require('express')
const app = express()

app.use('/', express.static(__dirname + '/src'))
app.use('/scripts', express.static(__dirname + '/src/scripts'))

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/src/index.html')
})


app.listen(3000, function () {
  console.log('Checkers listening on port 3000!')
})