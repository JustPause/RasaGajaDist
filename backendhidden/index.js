const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Backend is running with Express!");
});

app.get("/books", (req, res) => {
  res.json(["book-one", "book-two"]);
});

app.listen(port, () => {
  console.log(`✅ Express server listening on port ${port}`);
});
