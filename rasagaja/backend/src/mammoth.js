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
  const docxFiles = files.filter((file) => {
    const name = file.name.toLowerCase();
    return name.endsWith(".docx");
  });

  const docFiles = files.filter((file) => {
    const name = file.name.toLowerCase();
    return name.endsWith(".doc");
  });

  const imgFiles = files.filter((file) => {
    const name = file.name.toLowerCase();
    return name.endsWith(".jpg") | name.endsWith(".png");
  });

  if (docxFiles.length === 0 && docFiles.length !== 0) {
    return [
      404,
      "Administratorius žino apie bėdą, pabandykite kitą dokumentą. (doc)",
    ];
  }
  if (docxFiles.length === 0 && imgFiles.length !== 0) {
    return [
      404,
      "Administratorius žino apie bėdą, pabandykite kitą dokumentą. (jpg/png)",
    ];
  }

  if (docxFiles.length === 0) {
    // console.debug("No directory");
    return [];
  }

  const text = await getDocText(docxFiles[0].id);

  const lines = text;

  if (lines.length < 2) {
    return [
      404,
      "DOCX faile nėra pakankamai teksto (trūksta pavadinimo arba pagrindinio teksto).",
    ];
  }
  // console.debug("lines.length directory");
  return [lines[0], lines.slice(1).map((line) => line.trim())];
}

module.exports = { getDocText, handelingDocument };
