const officeParser = require("officeparser");

async function getJauniTekstai(docName) {
  try {
    const data = await officeParser.parseOfficeAsync(
      "doc/JAUNI TEKSTAI. ĮŽANGOS ŽODIS..docx",
    );
    console.log("Parsed Text:", data);
  } catch (err) {
    console.error("Error:", err);
  }
}

module.exports = {
  getJauniTekstai,
};
