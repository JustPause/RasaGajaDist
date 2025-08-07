const { findIdByName, getBooks, streamFile } = require("./googleDrive.js");
const express = require("express");
const app = express();

let Books = ["nemunai-teka-i-drakono-kalnus"];

app.listen(3000,() => {
  console.log(`Server listening`);
});

app.get(prefix+"/", async (req, res) => {
  // console.log(await listFiles());
  fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    agent,
  });
  res.send(req.ip);
  console.log("init get:", req.ip);
});

app.get(prefix+"/books", async (req, res) => {
  try {
    res.json(Books);
  } catch (error) {
    console.error("Error fetching names:", error);
    res.status(500).send("Server error");
  }
});

app.get(prefix+"/books/:books", async (req, res) => {
  
  try {
    const bookName = req.params.books;

    if (Books.includes(bookName)) {
      let Chapetes = await getBooks();
      res.json(Chapetes);
    } else {
      console.error("Error fetching book:", bookName);
      res.status(404).send("No book of that name found");
    }
  } catch (error) {
    console.error("Error fetching book:", error);
    res.status(500).send("Server error");
  }
});

app.get(prefix+"/books/:book/:chapeter", async (req, res) => {
  try {
    const WhatWasSelected = req.params.chapeter;

    const ListOfChapetes = await getBooks();

    if (ListOfChapetes.includes(WhatWasSelected)) {
      const id = await findIdByName(WhatWasSelected);
      const stream = await streamFile(id);

      res.setHeader("Content-Type", "audio/wav");
      res.setHeader("Transfer-Encoding", "chunked");
      res.setHeader("Cache-Control", "no-cache");

      stream.on("error", (err) => {
        console.error("File streaming error:", err);
        res.status(404).send("File not found");
      });

      stream.pipe(res);
    } else {
      console.error("Error fetching chapeter:", Chapeter);
      res.status(404).send("No chapeter of that name found");
    }
  } catch (error) {
    console.error("Error fetching chapeter:", error);
    res.status(500).send("Server error");
  }
});
