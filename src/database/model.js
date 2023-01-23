const { connection } = require("./db");

const table_name = "board";

connection.connect();

function getDB(callback) {
  const query = `SELECT * FROM ${table_name}`;

  connection.query(query, (err, results, fields) => {
    if (err) {
      console.log(`select 에러 : ${err}`);

      callback(err);
    }

    callback(null, results);

    connection.end();
  });
}

function insertDB(title, content) {
  const query = `INSERT INTO ${table_name} (title, content) VALUES ('${title}', '${content}')`;

  connection.query(query, (err, results, fields) => {
    if (err) {
      throw err;
    }

    console.log("Insert 성공");

    connection.end();
  });
}

function deleteDB(id) {
  const query = `DELETE FROM ${table_name} WHERE id = '${id}'`;

  connection.query(query, (err, results, fields) => {
    if (err) {
      throw err;
    }

    console.log("Delete 성공");

    connection.end();
  });
}

module.exports = {
  getDB,
  insertDB,
  deleteDB,
};
