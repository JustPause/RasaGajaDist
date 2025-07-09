import express from "express";

const app = express();

app.listen(() => {
  console.log(`Server listening`);
});

app.get("/", async (req, res) => {
  // console.log(await listFiles());

  res.send(req.ip);
  console.log("init get:", req.ip);
});