const mysql = require("mysql");
const dotenv = require("dotenv");

// .env 파일에 있는 환경변수를 사용 가능하게 하는 코드
dotenv.config();

const connection = mysql.createConnection({
  host: "localhost", // 호스트 이름
  user: "root", // 유저 이름
  password: process.env.DB_PASSWORD, // 유저 비밀번호
  database: "board", // 데이터베이스 이름
});

module.exports = { connection };
