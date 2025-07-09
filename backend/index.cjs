const express = require("express");

const app = express();

app.listen(() => {
  console.log(`Server listening`);
});

app.get("/", async (req, res) => {
  // console.log(await listFiles());

  console.log("init get:", req.ip);
  res.send(req.ip);
});
