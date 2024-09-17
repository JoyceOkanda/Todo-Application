const mysql = require('mysql2'); 
const pool = mysql.createPool({ 
 host: 'localhost', // your MySQL host 
 user: 'root', // your MySQL user 
 password: 'Joycemysql_1', // your MySQL password 
 database: 'todos_app' // your database name 
}); 
module.exports = pool.promise(); 
