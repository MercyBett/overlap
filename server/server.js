const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { detectOverlappingWords } = require("./overlap");

const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   res.send("welcome to word overlap");
// });

app.post("", (req, res) => {
  const word1 = req.body.word1;
  const word2 = req.body.word2;
  const result = detectOverlappingWords(word1, word2);
  res.json(result);
});

app.listen(5000, () => {
  console.log("App started on port 5000");
});
