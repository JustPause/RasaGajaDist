const fs = require("fs").promises;
const path = require("path");
const process = require("process");

process.env.NODE_EXTRA_CA_CERTS = "/var/home/rasagaja/backend/cacert.crt";

const { authenticate } = require("@google-cloud/local-auth");
const { google } = require("googleapis");

const SCOPES = ["https://www.googleapis.com/auth/drive.readonly"];
const TOKEN_PATH = path.join(process.cwd(), "env/token.json");
const CREDENTIALS_PATH = path.join(
  process.cwd(),
  "env/client_secret_2_227889613965-6kvonvebjvhpjntfvfskgmetfuhci244.apps.googleusercontent.com.json",
);

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

// Uper move to class

async function googleDrive() {
  const drive = await accessDrive();
  const folderId = "17GGBweAz6ro0de9e6wk0v4v5qs9CpzsI";

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

  return res.data;
}

async function getBooks() {
  const files = await googleDrive();

  let returnData = [];

  files.sort((a, b) => {
    const _a = parseInt(a.name.split(".")[0]);
    const _b = parseInt(b.name.split(".")[0]);
    return _a - _b;
  });

  files.map((file) => {
    const name = file.name.split(".")[1]?.trim();

    if (name) {
      returnData.push(name);
    }
  });

  return returnData;
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

module.exports = { listFiles, streamFile, getBooks, findIdByName };
