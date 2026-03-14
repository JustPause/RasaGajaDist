const {
  findIdByName,
  getBooksList,
  getBookChapterList,
  streamFile,
  googleDrive,
  listFiles,
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
    const returning = [];

    // for (let i = 0; i < files.length; i++) {
    //   const [folderID, folderNameUpper] = files[i]["name"].split(". ");
    //   folderName = folderNameUpper.toLowerCase();
    //   returning[folderID - 1] = { folderName };
    // }

    // res.json({ returning });

    res.status(200).send("Good");
  } catch (error) {
    res.status(500).send("Server error");
  }
});

app.get(prefix + "/doc/noveles/:novele", async (req, res) => {
  try {
    const files = await googleDrive("NOVELĖS IR KT");
    const novele = String(req.params.novele);
    let noMoreWork = true;

    for (let i = 0; i < files.length; i++) {
      const [folderID, folderNameUpper] = files[i]["name"].split(". ");
      const ID = files[i]["id"];
      let folderName = folderNameUpper.toLowerCase();

      if (folderName.localeCompare(novele) == 0) {
        // console.log(await listFiles(ID));

        res.json(ID);
        noMoreWork = false;
      }
    }
    if (noMoreWork) {
      res.status(404).send("No doc by that name");
    }
  } catch (error) {
    res.status(500).send("Server error");
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
