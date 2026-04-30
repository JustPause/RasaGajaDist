const express = require("express");

const {
  init,
  findIdByName,
  getBooksList,
  getBookChapterList,
  streamFile,
  googleDrive,
} = require("./src/googleDrive");

const { handelingDocument } = require("./src/mammoth.js");

const app = express();
const prefix = "/backend";

let apiReady = false;
let initError = null;

async function initIndex() {
  try {
    await init();
    apiReady = true;
  } catch (err) {
    initError = err;
    console.error("Google Drive init failed:", err);
  }
}

function rejectIfStarting(req, res, next) {
  if (apiReady) return next();

  if (initError) {
    return res.status(500).json({
      status: "error",
      message: "API failed to start",
    });
  }

  return res.status(503).json({
    status: "starting",
    message: "API is starting, try again soon",
  });
}

app.get(prefix + "/", async (req, res) => {
  if (!apiReady) {
    return res.status(503).json({
      status: "starting",
      message: "API is starting",
    });
  }

  res.send(
    "Hello. I see you've stumbled into my back end - that's okay. You can always go back unless you want to look for some data in here, which is possible. You probably won't find anything very interesting... unless you like audiobooks, in which case, sure.",
  );
  console.info("init get:", req.ip);
});

app.use(prefix, rejectIfStarting);

app.get(prefix + "/doc", async (req, res) => {
  try {
    const files = await googleDrive("TEKSTAI");

    let returning = [];

    for (let i = 0; i < files.length; i++) {
      const name = files[i].name;
      const match = name.match(/^\d+/);

      if (!match) continue;

      const index = Number(match[0]) - 1;
      const cleanName = name.replace(/^\d+\.\s*/, "");
      returning[index] = cleanName;
    }

    res.json(returning);
  } catch (error) {
    res.status(500).send("Server error" + error);
  }
});

app.get(prefix + "/doc/*", async (req, res) => {
  try {
    const path = String(req.params[0]);
    const folderNames = path.split("/");
    const documenString = folderNames[folderNames.length - 1];
    const files = await googleDrive(documenString);

    if (files === undefined) {
      return res.status(404).send("No document buy that name");
    }

    const document = await handelingDocument(files);

    if (document.length !== 0) {
      res.json({ Title: document[0], body: document[1] });
      return;
    }

    let returning = [];

    for (let i = 0; i < files.length; i++) {
      const name = files[i].name;
      const match = name.match(/^\d+/);

      if (!match) continue;

      const index = Number(match[0]) - 1;
      const cleanName = name.replace(/^\d+\.\s*/, "");
      returning[index] = cleanName;
    }

    res.json(returning);
  } catch (error) {
    res.status(500).send("Server error" + error);
  }
});

app.get(prefix + "/knygos", async (req, res) => {
  try {
    res.json(await getBooksList());
  } catch (error) {
    res.status(500).send("Server error " + error);
  }
});

app.get(prefix + "/:knyga", async (req, res) => {
  try {
    const bookName = req.params.knyga;
    const knygos = await getBooksList();

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
    const chapeter = req.params.chapeter;
    // const range = req.headers.range;

    let id = await findIdByName(chapeter);

    if (id == null) {
      console.error("Error fetching chapeter:", req.params.chapeter);
      return res.status(404).send("No chapeter of that name found");
    }

    const stream = await streamFile(id);

    const stream_content_type = stream.headers["content-type"];
    const stream_content_length = stream.headers["content-length"];

    res.setHeader("Content-Type", stream_content_type);
    res.setHeader("Content-Length", stream_content_length);
    res.setHeader("Accept-Ranges", "bytes");

    stream.data.pipe(res);
  } catch (error) {
    console.error("Error fetching chapeter:", error);
    res.status(500).send("Server error");
  }
});

module.exports = { app, initIndex };
