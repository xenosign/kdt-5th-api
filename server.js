const express = require("express");
const cors = require("cors");
const PORT = 4000;
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  console.log(req.query);
});

app.listen(PORT, () => {
  console.log(`데이터 통신 서버가 ${PORT}에서 작동 중입니다!`);
});
