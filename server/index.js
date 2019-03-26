const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const port = 3000
const connection = require('../database/index')
//const db = require('../database/index')


app.use(express.static(path.join(__dirname + '/../public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

console.log('File', path.join(__dirname + '/../public'))


app.get('/', (req,res) =>
res.send('Hello')
)

app.listen(port, () => console.log('Server is running'))