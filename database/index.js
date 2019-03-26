var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: ''
})

connection.connect(function (err) {
  if (err) {
    console.log('Error connecting databese', err);
  } else {
    console.log('Database is connected');
  }
});

//create database
connection.query('CREATE DATABASE IF NOT EXISTS description', function(err, data) {
  if(err) {
    console.log('Error', err)
  } else {
    console.log(null, data)
  }
});

connection.query('USE description', function(err, data) {
  if(err) {
    console.log('Error', err)
  } else {
    console.log(null, data)
  }
});

connection.query('CREATE TABLE IF NOT EXISTS descriptionInfo (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name CHAR(30), category CHAR(30), stars CHAR(5), reviews CHAR(10), taste CHAR(20), description CHAR(100))', function(err, data) {
  if (err) {
    console.log('ERROR', err)
  } else {
    console.log(null, data)
  }
});




module.exports = connection;