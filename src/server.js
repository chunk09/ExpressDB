const express = require("express");
const { getDB, insertDB } = require("./database/model");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("src"));

app.get("/", (req, res) => {
  res.send("Hello world");

  getDB((err, results) => {
    console.log(`result : ${results[0].title}`);
  });
});

app.get("/board", (req, res) => res.sendFile(__dirname + "/pages/board.html"));

app.post("/board/post", (req, res) => {
  const title = req.body.title;
  const content = req.body.content;

  insertDB(title, content);

  res.redirect("/board");
});

app.listen(5000, () => console.log("서버 활성화 -> http://localhost:5000"));
