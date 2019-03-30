var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'description'
})

connection.connect(function (err) {
  if (err) {
    console.log('Error connecting databese', err);
  } else {
    console.log('Database is connected');
  }
});


module.exports = connection;
