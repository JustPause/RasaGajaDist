const { ideahub } = require("googleapis/build/src/apis/ideahub/index.js");
const {
  findIdByName,
  getBooksList,
  getBookChapterList,
  streamFile,
} = require("./src/googleDrive.js");
const express = require("express");
const app = express();
const prefix = "/backend";

let knygos = ["nemunai-teka-i-drakono-kalnus", "klausyti-ištraukos"];

app.listen(8002, async () => {
  console.log("Server listening");
});

app.get(prefix + "/", async (req, res) => {
  res.send(
    "Hello. I see you've stumbled into my back end - that's okay. You can always go back unless you want to look for some data in here, which is possible. You probably won't find anything very interesting... unless you like audiobooks, in which case, sure.",
  );
  console.log("init get:", req.ip);
});

app.get(prefix + "/knygos", async (req, res) => {
  try {
    res.json(await getBooksList());
  } catch (error) {
    res.status(500).send("Server error");
  }
});

app.get(prefix + "/:knyga", async (req, res) => {
  try {
    const bookName = req.params.knyga;

    if (bookName === knygos[0]) {
      res.json(await getBookChapterList(bookName));
    } else if (bookName === knygos[1]) {
      res.json(await getBookChapterList(bookName));
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
    let id = await findIdByName(WhatWasSelected);

    if (id == null) {
      console.error("Error fetching chapeter:", req.params.chapeter);
      res.status(404).send("No chapeter of that name found");
    }

    const { range } = req.headers;
    const stream = await streamFile(id);

    console.log(stream);

    if (!range) {
      res.setHeader("Content-Type", "audio/wav");

      stream.pipe(res);
      stream.on("error", (err) => res.status(500).send(err));
      return;
    }

    // res.setHeader("Accept-Ranges", "bytes");
    // res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Content-Type", "audio/wav");

    stream.pipe(res);

    stream.on("error", (err) => {
      console.error("File streaming error:", err);
      res.status(500).send("File not found");
    });
  } catch (error) {
    console.error("Error fetching chapeter:", error);
    res.status(500).send("Server error");
  }
});
