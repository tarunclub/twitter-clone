const mysql = require('mysql2');

exports.db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'J@v@scr!ptes6',
  database: 'twitter',
});
