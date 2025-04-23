const mysql = require('mysql2');
 const connection = mysql.createConnection({
     host: process.env.MYSQL_HOST ,
     user: process.env.MYSQL_USER ,
     password: process.env.MYSQL_PASSWORD ,
     database: process.env.MYSQL_DATABASE ,
     port: process.env.MYSQL_PORT || 3306,
     waitForConnections: true,
     connectionLimit: 10,
     queueLimit: 0
 });
 
 connection.connect(err => {
     if (err) {
         console.error('Database connection failed: ', err);
         return;
     }
     console.log('Connected to MySQL database');
 });
 
 module.exports = connection;