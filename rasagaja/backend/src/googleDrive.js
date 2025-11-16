const fs = require("fs").promises;
const path = require("path");
const process = require("process");

process.env.NODE_EXTRA_CA_CERTS = "/var/home/rasagaja/backend/cacert.crt";

const { authenticate } = require("@google-cloud/local-auth");
const { google } = require("googleapis");

const SCOPES = ["https://www.googleapis.com/auth/drive.readonly"];
const TOKEN_PATH = path.join(process.cwd(), "env/token.json");
const CREDENTIALS_PATH = path.join(process.cwd(), "env/client_secret.json");

/**
 * Reads previously authorized credentials from the save file.
 *
 * @return {Promise<OAuth2Client|null>}
 */
async function loadSavedCredentialsIfExist() {
  try {
    const content = await fs.readFile(TOKEN_PATH);
    const credentials = JSON.parse(content);
    return google.auth.fromJSON(credentials);
  } catch (err) {
    return null;
  }
}

/**
 * Serializes credentials to a file compatible with GoogleAuth.fromJSON.
 *
 * @param {OAuth2Client} client
 * @return {Promise<void>}
 */
async function saveCredentials(client) {
  const content = await fs.readFile(CREDENTIALS_PATH);
  const keys = JSON.parse(content);
  const key = keys.installed || keys.web;
  const payload = JSON.stringify({
    type: "authorized_user",
    client_id: key.client_id,
    client_secret: key.client_secret,
    refresh_token: client.credentials.refresh_token,
  });
  await fs.writeFile(TOKEN_PATH, payload);
}

/**
 * Load or request or authorization to call APIs.
 *
 */
async function authorize() {
  let client = await loadSavedCredentialsIfExist();
  if (client) {
    return client;
  }
  client = await authenticate({
    scopes: SCOPES,
    keyfilePath: CREDENTIALS_PATH,
  });
  if (client.credentials) {
    await saveCredentials(client);
  }
  return client;
}

async function googleDrive() {
  const drive = await accessDrive();

  const folderId = "1Rw4Lnn_f3y1A3qy5nipvZ6K4d2qfA0tj";

  const res = await drive.files.list({
    q: `'${folderId}' in parents`,
    pageSize: 150,
    fields: "nextPageToken, files(id, name)",
  });
  const files = res.data.files;

  if (files.length === 0) {
    console.log("No files found.");
    return;
  }

  return files;
}

async function listFiles() {
  const files = await googleDrive();

  if (files.length === 0) {
    console.log("No files found.");
    return;
  }

  console.log("Files:");
  files.map((file) => {
    console.log(`${file.name} (${file.id})`);
  });
}

async function accessDrive() {
  return google.drive({ version: "v3", auth: await authorize() });
}

async function streamFile(fileId) {
  const drive = await accessDrive();

  const res = await drive.files.get(
    { fileId, alt: "media" },
    { responseType: "stream" },
  );

  return res;
}

async function getBooksList() {
  return ["nemunai-teka-i-drakono-kalnus", "klausyti-ištraukos"];
}

/**
 * Load and list books List, directorys in the drive. ad it splits the name to id, Chapeter name
 *
 */
async function getBookChapterList(bookName) {
  const files = await googleDrive();

  let returnData = new Map();

  files.sort((a, b) => {
    const _a = parseInt(a.name.split(".")[0]);
    const _b = parseInt(b.name.split(".")[0]);
    return _a - _b;
  });

  if (bookName === "nemunai-teka-i-drakono-kalnus") {
    files.map((file) => {
      const id = file.name.split(".")[0]?.trim();
      const name = file.name.split(".")[1]?.trim();

      if (name) {
        returnData.set(id, name);
      }
    });
  } else if (bookName === "klausyti-ištraukos") {
    listOfTileIds = [
      1, 2, 8, 12, 13, 19, 23, 40, 41, 49, 54, 55, 65, 74, 96, 77, 78, 83, 79,
      90, 94, 106,
    ];

    files.map((file) => {
      const id = file.name.split(".")[0]?.trim();
      const name = file.name.split(".")[1]?.trim();

      if (name && listOfTileIds.includes(Number(id))) {
        returnData.set(id, name);
      }
    });
  }

  return Object.fromEntries(returnData);
}

async function findIdByName(name) {
  const files = await googleDrive();
  let returnData = {};

  files.forEach((file) => {
    const id = file.id;
    file = file.name.split(".");
    returnData[+file[0]] = { name: file[1].trim(), id: id };
  });

  const NamesIds = returnData;

  for (const key in NamesIds) {
    if (NamesIds[key].name === name) {
      return NamesIds[key].id;
    }
  }

  return null;
}

module.exports = {
  listFiles,
  streamFile,
  getBookChapterList,
  getBooksList,
  findIdByName,
};
