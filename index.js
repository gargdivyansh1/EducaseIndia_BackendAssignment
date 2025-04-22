require("dotenv").config();
const express = require('express');
const schoolRoutes = require('./routes/schoolRoutes.js');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();


const pool = mysql.createPool({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

async function initializeServer() {
  try {
    const conn = await pool.getConnection();
    console.log('Connected to MySQL database');
    conn.release();

    app.use(cors());
    app.use(express.json());
    app.use('/api', schoolRoutes);

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Database connection failed:', err);
    console.log('Retrying connection in 5 seconds...');
    setTimeout(initializeServer, 5000);
  }
}


initializeServer();

module.exports = pool;