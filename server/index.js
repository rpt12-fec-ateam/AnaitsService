const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const port = 8080
const connection = require('../database/index.js');
//console.log('CONNECTION------>', connection)
// const getFakeData = require('../database/index.js').getFakeData
//const db = require('../database/index')


app.use(express.static(path.join(__dirname + '/../public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/test', (req, res) => {
  connection.query('SELECT * FROM descriptionInfo', (err, data) => {
    if (err) {
      console.log(err, null);
    } else {
      //console.log(null, data);
      res.send(data)
    }
  });
});

// app.get('/', (req,res) =>
// res.send('Hello')
// )

app.listen(port, () => console.log('Server is running'))