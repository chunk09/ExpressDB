const express = require("express");
const { getDB, insertDB, deleteDB } = require("./database/model");

const app = express();

// Request에 body 기능을 사용 가능하게 해주는 코드
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// localhost:5000
app.get("/", (req, res) => {
  res.send("Hello world");

  getDB((err, results) => {
    // DB에 있는 값 중 에서 첫번째 행에 있는 제목 가져오기
    console.log(`result : ${results[0].title}`);
  });
});

// localhost:5000/board
app.get("/board", (req, res) => res.sendFile(__dirname + "/pages/board.html"));

// localhost:5000/board/post
app.post("/board/post", (req, res) => {
  const title = req.body.title; // form으로 보낸 제목 가져오기
  const content = req.body.content; // form으로 보낸 내용 가져오기

  insertDB(title, content);

  // 모든 과정을 완료한 후 localhost:5000/board로 이동
  res.redirect("/board");
});

// localhost:5000/board/delete/{게시물 id}
app.get("/board/delete/:id", (req, res) => {
  const id = req.params.id; // 게시물 id 가져오기

  deleteDB(id);

  // 모든 과정을 완료한 후 localhost:5000/board로 이동
  res.redirect("/board");
});

// 서버를 5000번대 포트로 열기
app.listen(5000, () => console.log("서버 활성화 -> http://localhost:5000"));
