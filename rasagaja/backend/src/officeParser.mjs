import officeparser from "officeparser";
import { streamFile } from "./googleDrive.mjs";
export async function getDocText(docFilesId) {
  const stream = await streamFile(docFilesId);
  const chunks = [];

  for await (const chunk of stream.data) {
    chunks.push(chunk);
  }

  const fileBuffer = Buffer.concat(chunks);
  // To Do adding suport for text to sepret funcion class

  return (await officeparser.parseOffice(fileBuffer)).toText();
}
