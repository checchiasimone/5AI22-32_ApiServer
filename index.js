var express = require('express')
var cors = require('cors')
var app = express()
 
app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/match', function (req, res) {
    res.send(req.query.a+" match with "+req.query.b+" at "+Math.floor(Math.random() * 101)+"%")
  })
  
app.listen(3000)
