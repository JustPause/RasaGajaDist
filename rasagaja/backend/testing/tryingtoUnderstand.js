const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3333;

app.use(cors());

// Endpoint for music streaming
app.get("/music/:filename", (req, res) => {
  const filename = req.params.filename;
  const filePath = path.resolve("music", filename);

  fs.stat(filePath, (err, stats) => {
    if (err) {
      console.error(err);
      return res.status(404).send("File not found");
    }

    const { range } = req.headers;
    if (!range) {
      const head = {
        "Content-Length": stats.size,
        "Content-Type": "audio/mpeg",
      };
      res.writeHead(200, head);

      const stream = fs.createReadStream(filePath);
      stream.pipe(res);
      stream.on("error", (err) => res.status(500).send(err));
      return;
    }

    const positions = range.replace(/bytes=/, "").split("-");
    const start = parseInt(positions[0], 10);
    const total = stats.size;
    const end = positions[1] ? parseInt(positions[1], 10) : total - 1;
    const chunksize = end - start + 1;

    console.log("Size: " + total);

    res.writeHead(206, {
      "Content-Range": `bytes ${start}-${end}/${total}`,
      "Accept-Ranges": "bytes",
      "Content-Length": chunksize,
      "Content-Type": "audio/mpeg",
    });

    const stream = fs.createReadStream(filePath, { start, end });
    stream.pipe(res);
    stream.on("error", (err) => res.status(500).send(err));
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
