const express = require("express");
const cors = require("cors");
const PORT = 4000;
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  console.log(req.query);
  res.status(200).send(JSON.stringify("제출 완료!"));
});

app.listen(PORT, () => {
  console.log(`데이터 통신 서버가 ${PORT}에서 작동 중입니다!`);
});
