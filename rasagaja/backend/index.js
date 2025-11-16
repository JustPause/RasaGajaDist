const {
  findIdByName,
  getBooksList,
  getBookChapterList,
  streamFile,
} = require("./src/googleDrive.js");
const { getJauniTekstai } = require("./src/officeParser.js");
const express = require("express");
const app = express();
const prefix = "/backend";

let knygos = ["nemunai-teka-i-drakono-kalnus", "klausyti-ištraukos"];

app.listen(8002, async () => {
  console.log("Server listening");
});

app.get(prefix + "/", async (req, res) => {
  res.send(
    "Hello. I see you've stumbled into my back end - that's okay. You can always go back unless you want to look for some data in here, which is possible. You probably won't find anything very interesting... unless you like audiobooks, in which case, sure.",
  );
  console.log("init get:", req.ip);
});

app.get(prefix + "/knygos", async (req, res) => {
  try {
    res.json(await getBooksList());
  } catch (error) {
    res.status(500).send("Server error");
  }
});

app.get(prefix + "/doc", async (req, res) => {
  res.json(await getJauniTekstai());
});

app.get(prefix + "/auth/google/callback", async (req, res) => {
  const { code } = req.query; // Gauname "code" parametrą iš Google

  try {
    // Išsiųskime užklausą Google, kad gautume access tokeną
    const response = await axios.post(
      GOOGLE_TOKEN_URL,
      querystring.stringify({
        code, // Authorization code
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        redirect_uri: REDIRECT_URI,
        grant_type: "authorization_code",
      }),
    );

    const { access_token, id_token, refresh_token } = response.data;

    // Pavyzdys: galime naudoti `id_token` vartotojo autentifikavimui
    const userInfo = await axios.get(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      {
        headers: { Authorization: `Bearer ${access_token}` },
      },
    );

    console.log(userInfo.data); // Parodome gautus vartotojo duomenis

    // Gali pasidaryti session arba pasaugoti vartotojo informaciją
    // Svarbu naudoti `id_token`, kad autentifikuotum vartotoją tavo sistemoje

    res.send("Login successful!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Authentication failed!");
  }
});

app.get(prefix + "/:knyga", async (req, res) => {
  try {
    const bookName = req.params.knyga;

    if (bookName === knygos[0]) {
      res.json(await getBookChapterList(bookName));
    } else if (bookName === knygos[1]) {
      res.json(await getBookChapterList(bookName));
    } else {
      console.error("Error fetching book:", bookName);
      res.status(404).send("No book of that name found");
    }
  } catch (error) {
    console.error("Error fetching book:", error);
    res.status(500).send("Server error");
  }
});

app.get(prefix + "/:knyga/:chapeter", async (req, res) => {
  try {
    const chapeter = req.params.chapeter;
    const range = req.headers.range;

    let id = await findIdByName(chapeter);

    if (id == null) {
      console.error("Error fetching chapeter:", req.params.chapeter);
      res.status(404).send("No chapeter of that name found");
    }

    const stream = await streamFile(id);

    const stream_content_type = stream.headers["content-type"];
    const stream_content_length = stream.headers["content-length"];

    res.setHeader("Content-Type", stream_content_type);
    res.setHeader("Content-Length", stream_content_length);
    res.setHeader("Accept-Ranges", "bytes");

    stream.data.pipe(res);
  } catch (error) {
    console.error("Error fetching chapeter:", error);
    res.status(500).send("Server error");
  }
});

module.exports = app;
