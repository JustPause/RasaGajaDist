const mammoth = require("mammoth");
const { streamFile } = require("./googleDrive");

async function getDocText(docFilesId) {
  const stream = await streamFile(docFilesId);
  const chunks = [];

  for await (const chunk of stream.data) {
    chunks.push(chunk);
  }

  const fileBuffer = Buffer.concat(chunks);

  let body = (await mammoth.extractRawText({ buffer: fileBuffer })).value;

  body = body.split("\n");
  body = body.map((line) => line.trim());
  body = body.filter((line) => line !== "");

  return body;
}

async function handelingDocument(files) {
  const docFiles = files.filter((file) => {
    const name = file.name.toLowerCase();
    return name.endsWith(".docx");
  });

  if (docFiles.length === 0) {
    return [];
  }

  const text = await getDocText(docFiles[0].id);

  const lines = text;

  if (lines.length < 2) {
    return res
      .status(404)
      .send("Docx does not contain enough text (missing title/body)");
  }

  return [lines[0], (body = lines.slice(1).map((line) => line.trim()))];
}

module.exports = { getDocText, handelingDocument };
