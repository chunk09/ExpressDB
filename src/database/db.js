const mysql = require("mysql");
const dotenv = require("dotenv");

// .env 파일에 있는 환경변수를 사용 가능하게 하는 코드
dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST, // 호스트 이름
  user: process.env.DB_USER, // 유저 이름
  password: process.env.DB_PASSWORD, // 유저 비밀번호
  database: process.env.DB_DATABASE, // 데이터베이스 이름
  port: process.env.DB_PORT // 포트
});

module.exports = { connection };
