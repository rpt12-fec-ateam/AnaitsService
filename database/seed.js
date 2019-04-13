
const connection = require('./index.js')
const path = _dirname + '/MOCK_DATA.csv'
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

//create table
connection.query('CREATE TABLE IF NOT EXISTS descriptionInfo ( id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name CHAR(30) NOT NULL, category CHAR(30) NOT NULL, stars CHAR(5) NOT NULL, reviews CHAR(10), taste CHAR(20), description VARCHAR(255))', function(err, data) {
  if (err) {
    console.log('ERROR', err)
  } else {
    console.log(null, data)
  }
});

//load data into database from mockdata file
connection.query('LOAD DATA LOCAL INFILE "'+ path +'" INTO TABLE descriptionInfo FIELDS TERMINATED BY "," LINES TERMINATED BY "\n" IGNORE 1 ROWS (id, name, category, stars, reviews, taste, description )', function(err, data) {
  if (err) {
    console.log('ERROR', err)
  } else {
    console.log(null, data)
  }
});

// setTimeout (connection.end, 2000);
