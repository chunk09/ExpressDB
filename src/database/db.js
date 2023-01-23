const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "choiyunho09!",
  database: "board",
});

module.exports = { connection };
