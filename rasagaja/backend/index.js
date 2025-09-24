const { findIdByName, getBooks, streamFile } = require("./src/googleDrive.js");
const express = require("express");
const app = express();
const prefix = "/backend";

let knygos = ["nemunai-teka-i-drakono-kalnus"];
let Glob_Chapetes;

app.listen(8001, async () => {
  console.log("Server listening");
  Glob_Chapetes = await getBooks();
  console.log("Books loaded:", Glob_Chapetes.length);
});

app.get(prefix + "/", async (req, res) => {
  res.send(
    "Hello. I see you've stumbled into my back end - that's okay. You can always go back unless you want to look for some data in here, which is possible. You probably won't find anything very interesting... unless you like audiobooks, in which case, sure.",
  );
  console.log("init get:", req.ip);
});

app.get(prefix + "/knygos", async (req, res) => {
  try {
    const start = Date.now();
    res.json(knygos);
    console.log("res.json:", Date.now() - start, "ms");
  } catch (error) {
    console.error("Error fetching names:", error);
    res.status(500).send("Server error");
  }
});

app.get(prefix + "/:knyga", async (req, res) => {
  try {
    const bookName = req.params.knyga;

    if (knygos.includes(bookName)) {
      res.json(Glob_Chapetes);
    } else {
      console.error("Error fetching book:", bookName);
      res.status(404).send("No book of that name found");
    }
  } catch (error) {
    console.error("Error fetching book:", error);
    res.status(500).send("Server error");
  }
});

app.get(prefix + "/:knyga/:chapeter", async (req, res) => {
  try {
    const WhatWasSelected = req.params.chapeter;
    if (Glob_Chapetes.includes(WhatWasSelected)) {
      console.log("1:", Date.now() - start, "ms");
      const id = await findIdByName(WhatWasSelected);
      console.log("2:", Date.now() - start, "ms");
      const stream = await streamFile(id);
      console.log("3:", Date.now() - start, "ms");
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
