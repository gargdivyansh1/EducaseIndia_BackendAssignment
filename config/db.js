const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: process.env.MYSQLHOST || process.env.DB_HOST || 'localhost',
    user: process.env.MYSQLUSER || process.env.DB_USER || 'root',
    password: process.env.MYSQLPASSWORD || process.env.DB_PASSWORD || '',
    database: process.env.MYSQLDATABASE || process.env.DB_NAME || 'test',
    port: process.env.MYSQLPORT || process.env.DB_PORT || 3306,
    connectTimeout: 30000
  });

connection.connect(err => {
    if (err) {
        console.error('Database connection failed: ', err);
        return ;
    }
    console.log('Connected to MySQL database');
});

module.exports = connection;