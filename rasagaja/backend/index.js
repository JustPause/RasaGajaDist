const {
  findIdByName,
  getBooksList,
  getBookChapterList,
  streamFile,
  googleDrive,
} = require("./src/googleDrive.js");

const { getJauniTekstai } = require("./src/officeParser.js");
const express = require("express");
const app = express();
const prefix = "/backend";

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

app.get(prefix + "/doc/noveles", async (req, res) => {
  try {
    const files = await googleDrive("NOVELĖS IR KT");
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
    res.status(500).send("Server error " + error);
  }
});

app.get(prefix + "/doc/noveles/:novele", async (req, res) => {
  try {
    const { parseOfficeAsync } = require("officeparser");
    const novele = req.params.novele;

    const files = await googleDrive(novele);

    const docFiles = files.filter((file) => {
      const name = file.name.toLowerCase();
      return name.endsWith(".docx");
    });

    const stream = await streamFile(docFiles[0].id);
    const chunks = [];

    for await (const chunk of stream.data) {
      chunks.push(chunk);
    }

    const fileBuffer = Buffer.concat(chunks);
    const text = await parseOfficeAsync(fileBuffer);
    const lines = text.split("\n");
    const body = lines.slice(1).map((line) => line.trim());

    res.json({ Title: lines[0], body: body });
  } catch (error) {
    res.status(500).send("Server error" + error);
  }
});

app.get(prefix + "/doc/straipsniai", async (req, res) => {
  try {
    res.json({});
  } catch (error) {
    res.status(500).send("Server error");
  }
});

app.get(prefix + "/doc/scenarijai", async (req, res) => {
  try {
    res.json({});
  } catch (error) {
    res.status(500).send("Server error");
  }
});

app.get(prefix + "/doc/knygos", async (req, res) => {
  try {
    res.json({});
  } catch (error) {
    res.status(500).send("Server error");
  }
});

app.get(prefix + "/auth/google/callback", async (req, res) => {});

app.get(prefix + "/:knyga", async (req, res) => {
  try {
    const bookName = req.params.knyga;
    const knygos = await getBooksList();
    console.log(knygos);

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
    const range = req.headers.range;

    let id = await findIdByName(chapeter);

    if (id == null) {
      console.error("Error fetching chapeter:", req.params.chapeter);
      res.status(404).send("No chapeter of that name found");
    }

    const stream = await streamFile(id);
    console.log(stream);

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

module.exports = app;
