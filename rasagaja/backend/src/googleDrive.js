const os = require("os");
// const fs = require("node:fs").promises;
const fs = require("fs").promises;
const path = require("path");
const process = require("process");

process.env.NODE_EXTRA_CA_CERTS = "/var/home/rasagaja/backend/cacert.crt";

const { authenticate } = require("@google-cloud/local-auth");
const { google } = require("googleapis");

const SCOPES = ["https://www.googleapis.com/auth/drive.readonly"];

const expandHome = (p) =>
  p && p.startsWith("~/") ? os.homedir() + p.slice(1) : p;

const TOKEN_PATH = expandHome(process.env.TOKEN_PATH);
const CREDENTIALS_PATH = expandHome(process.env.CREDENTIALS_PATH);

if (!TOKEN_PATH || !CREDENTIALS_PATH) {
  throw new Error("Missing env var TOKEN_PATH");
}

let folderMap = null;
let initPromise = null;

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
    access_type: "offline",
    prompt: "consent",
  });
  if (client.credentials) {
    await saveCredentials(client);
  }
  return client;
}

async function init() {
  if (folderMap) return folderMap;
  if (initPromise) return initPromise;

  initPromise = (async () => {
    folderMap = await listDirAndDirId();
    return folderMap;
  })();

  return initPromise;
}

async function googleDrive(folderKey) {
  const drive = await accessDrive();
  const folderMapAwaited = await folderMap;
  const key = folderMapAwaited.get(folderKey);

  if (key === undefined) {
    console.error("Key is undefined.");
    return;
  }

  const res = await drive.files.list({
    q: `'${folderMapAwaited.get(folderKey)}' in parents`,
    pageSize: 150,
    fields: "nextPageToken, files(id, name)",
  });
  const files = res.data.files;

  if (files.length === 0) {
    console.error("No files found.");
    return;
  }

  return files;
}

async function listDirAndDirId() {
  const TEKSTAI_ID = "1-I54VhYZNN5WTHQO96Sz9vRtb6AC8JMs";
  const drive = await accessDrive();
  let returnData = [];

  async function traverseFolder(parentId) {
    const res = await drive.files.list({
      q: `'${parentId}' in parents`,
      pageSize: 150,
      fields: "nextPageToken, files(id, name, mimeType)",
    });

    const files = res.data.files;

    for (const file of files) {
      if (file.mimeType === "application/vnd.google-apps.folder") {
        returnData.push({
          id: file.id,
          name: file.name,
        });

        await traverseFolder(file.id);
      }
    }
  }

  await traverseFolder(TEKSTAI_ID);

  const returnDataFormated = reformatingFromDicsinayName(returnData);

  let map = new Map();

  map.set("AUDIO KNYGA", "1Rw4Lnn_f3y1A3qy5nipvZ6K4d2qfA0tj");
  map.set("TEKSTAI", "1-I54VhYZNN5WTHQO96Sz9vRtb6AC8JMs");

  for (let i = 0; i < returnDataFormated.length; i++) {
    map.set(returnDataFormated[i].name, returnDataFormated[i].id);
  }
  return map;
}

function reformatingFromDicsinayName(Data) {
  for (let i = 0; i < Data.length; i++) {
    Data[i] = { id: Data[i].id, name: Data[i].name.replace(/^\d+\.\s*/, "") };
  }

  return Data;
}

async function listFiles(folderKey) {
  const files = await googleDrive(folderKey);

  if (files.length === 0) {
    console.error("No files found.");
    return;
  }

  return files;
}

async function listFilesId(id) {
  const files = await googleDrive(id);

  if (files.length === 0) {
    console.error("No files found.");
    return;
  }

  return files;
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
  return ["nemunai-teka-i-drakono-kalnus", "klausyti-ištrauku"];
}

/**
 * Load and list books List, directorys in the drive. ad it splits the name to id, Chapeter name
 *
 */
async function getBookChapterList(bookName) {
  const files = await googleDrive("AUDIO KNYGA");
  const knyguPavadinimai = await getBooksList();

  let returnData = new Map();

  files.sort((a, b) => {
    const _a = parseInt(a.name.split(".")[0]);
    const _b = parseInt(b.name.split(".")[0]);
    return _a - _b;
  });

  if (bookName === knyguPavadinimai[0]) {
    files.map((file) => {
      const id = file.name.split(".")[0]?.trim();
      const name = file.name.split(".")[1]?.trim();

      if (name) {
        returnData.set(id, name);
      }
    });
  } else if (bookName === knyguPavadinimai[1]) {
    const listOfTileIds = [
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
  const files = await googleDrive("AUDIO KNYGA");
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
  init,
  findIdByName,
  getBooksList,
  getBookChapterList,
  streamFile,
  googleDrive,
};
