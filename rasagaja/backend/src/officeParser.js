const officeParser = require("officeparser");
const { listFiles, listFilesId } = require("./googleDrive.js");

async function getJauniTekstai(docName) {
  try {
    let data = await listFiles("NOVELĖS IR KT");

    console.log(data);
  } catch (err) {
    console.error("Error:", err);
  }
}

module.exports = {
  getJauniTekstai,
};
