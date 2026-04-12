// const officeparser = require("officeparser");
const mammoth = require("mammoth");
const { streamFile } = require("./googleDrive");

async function getDocText(docFilesId) {
  const stream = await streamFile(docFilesId);
  const chunks = [];

  for await (const chunk of stream.data) {
    chunks.push(chunk);
  }

  const fileBuffer = Buffer.concat(chunks);
  // To Do adding suport for text to sepret funcion class

  let body = (await mammoth.extractRawText({ buffer: fileBuffer })).value;

  body = body.split("\n");

  return body;
}

module.exports = { getDocText };
