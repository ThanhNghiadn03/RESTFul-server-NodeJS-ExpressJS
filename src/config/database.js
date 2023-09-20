const mysql = require('mysql2');
require('dotenv').config();

//Connection Database
// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     port: process.env.DB_PORT
//   });

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  //maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  //idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  //enableKeepAlive: true,
  //keepAliveInitialDelay: 0
});

module.exports = pool;