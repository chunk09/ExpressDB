const { connection } = require("./db");

const table_name = "board"; // 테이블 이름

connection.connect(); // 서버 열기

/**
 * DB에 있는데이터 가져오는 함수
 * @param callback 콜백 함수를 이용해서 값을 얻을 수 있게 한다.
 */
function getDB(callback) {
  const query = `SELECT * FROM ${table_name}`;

  connection.query(query, (err, results, fields) => {
    if (err) {
      console.log(`select 에러 : ${err}`);

      callback(err);
    }

    callback(null, results);

    connection.end(); // 서버 닫기. 과부하 방지
  });
}

/**
 * DB에 제목과 내용을 인서트 하는 함수
 * @param {string} title 제목
 * @param {string} content 내용
 */
function insertDB(title, content) {
  const query = `INSERT INTO ${table_name} (title, content) VALUES ('${title}', '${content}')`;

  connection.query(query, (err, results, fields) => {
    if (err) {
      throw err;
    }

    console.log("Insert 성공");

    connection.end(); // 서버 닫기. 과부하 방지
  });
}

/**
 * DB에 있는 데이터를 삭제하는 함수
 * @param {number} id
 */
function deleteDB(id) {
  const query = `DELETE FROM ${table_name} WHERE id = '${id}'`;

  connection.query(query, (err, results, fields) => {
    if (err) {
      throw err;
    }

    console.log("Delete 성공");

    connection.end(); // 서버 닫기. 과부하 방지
  });
}

/**
 * DB에 있는 데이터를 업데이트 하는 함수
 * @param {number} id 데이터 id
 * @param {string} title 업데이트 할 제목
 * @param {string} content 엡데이트 할 내용
 */
function updateDB(id, title, content) {
  const query = `UPDATE ${table_name} SET title = '${title}', content = '${content}' WHERE id = '${id}'`;

  connection.query(query, (err, results, fields) => {
    if (err) {
      throw err;
    }

    console.log("Update 성공");

    connection.end(); // 서버 닫기. 과부하 방지
  });
}

// 함수를 외부 파일들도 사용할 수 있게 하는 코드
module.exports = {
  getDB,
  insertDB,
  deleteDB,
  updateDB,
};
