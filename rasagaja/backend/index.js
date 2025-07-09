import { findIdByName, getBooks, streamFile } from "./googleDrive.mjs";
import { DownloadedFiles } from "./DownloadedFiles.mjs";
import { initProcess } from "./process.mjs";

import path from "path";
import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();

const port = process.env.PORT || 3000;
const allowedIps = ['127.0.0.1', '::1', '::ffff:127.0.0.1'];

let Books = ["nemunai-teka-i-drakono-kalnus"];
let Chapetes = [];
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathForDownload = path.join(__dirname, "files");
export const downloads = new DownloadedFiles();

app.use((req, res, next) => {
  const ip = req.ip || req.connection.remoteAddress;

  if (!allowedIps.includes(ip)) {
    console.log("Blocked IP:", ip);
    return res.status(403).send('Forbidden');
  }

  next();
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.get("/", async (req, res) => {
  // console.log(await listFiles());

  res.send(req.ip);
  console.log("init get:", req.ip);
});

app.get("/books", async (req, res) => {
  try {
    res.json(Books);
  } catch (error) {
    console.error("Error fetching names:", error);
    res.status(500).send("Server error");
  }
});

app.get("/books/:books", async (req, res) => {
  try {
    const bookName = req.params.books;

    if (Books.includes(bookName)) {
      Chapetes = await getBooks();
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

app.get("/books/:book/:chapeter", async (req, res) => {
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

initProcess();
