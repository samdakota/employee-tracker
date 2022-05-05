const mysql = require("mysql2");
const db = mysql.createConnection(
    {
      host: "localhost",
      user: "root",
      password: "pYR&hCt852Gf",
      database: "employeeTracker",
    },
  );

  module.exports = db;