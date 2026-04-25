const test = require("node:test");
const assert = require("node:assert/strict");
const request = require("supertest");
const { app } = require("../index");

let server;

test.before(async () => {
  server = app.listen(0);
  await new Promise((resolve) => server.once("listening", resolve));
});

test.after(async () => {
  if (!server) return;

  await new Promise((resolve, reject) => {
    server.close((err) => {
      if (err) reject(err);
      else resolve();
    });
  });
});

test("GET /backend/ returns greeting", async (t) => {
  const expected =
    "Hello. I see you've stumbled into my back end - that's okay. You can always go back unless you want to look for some data in here, which is possible. You probably won't find anything very interesting... unless you like audiobooks, in which case, sure.";

  const res = await request(server).get("/backend/").expect(200);
  assert.equal(res.text, expected);
});

test("GET /backend/doc/noveles returns novels that are known", async (t) => {
  const response = await request(app).get("/backend/doc/noveles").expect(200);

  assert.deepStrictEqual(response.body, [
    "JAUNI TEKSTAI. IŽANGOS ŽODIS",
    "ANEMIJA SERGANTIS STEBUKLAS",
    "MADONIŠKA NUOTRAUKA",
    "KOMUNALKĖ LAISVĖJE",
    "BANDYMAS IŠEITI",
    "ULTRAVIOLETINĖ NOVELĖ",
    "AŠ MOKAUSI PIRMOJE VALDORFO KLASEJE",
    "ASKETIŠKI FRAGMENTAI",
    "PATVORIŲ PEDAGOGIKA",
    "ILGAS PAVADINIMAS, REIKIA ISTRINTI",
  ]);
});

test("GET /backend/doc/straipsniai returns novels that are known", async (t) => {
  const res = await request(server).get("/backend/doc/straipsniai").expect(200);
  t.todo();
});

test("GET /backend/doc/scenarijai returns novels that are known", async (t) => {
  const res = await request(server).get("/backend/doc/straipsniai").expect(200);
  t.todo();
});

test("GET /backend/doc/knygos returns novels that are known", async (t) => {
  const res = await request(server).get("/backend/doc/knygos").expect(200);
  t.todo();
});

test("GET /backend/knygos returns a list of books", async () => {
  const response = await request(app).get("/backend/knygos").expect(200);

  assert.deepStrictEqual(response.body, [
    "nemunai-teka-i-drakono-kalnus",
    "klausyti-ištrauku",
  ]);
});

test("GET /backend/:knyga returns chapter list for known book", async () => {
  const response = await request(app)
    .get("/backend/nemunai-teka-i-drakono-kalnus")
    .expect(200);

  assert.deepStrictEqual(response.body, {
    1: "DVYNUKAI",
    2: "SKIAUTELĖ",
    3: "PADRAIKA",
    4: "PLEVĖSA",
    5: "UŽGAIDA",
    6: "ATLYGIS",
    7: "ILTIS",
    8: "DVIKOVA",
    9: "TVIRTOVĖ",
    10: "GYNĖJAS",
    11: "NEŠLIFUOTAS",
    12: "ŽAIDĖJAS",
    13: "TALENTAS",
    14: "KREPAS",
    15: "JUOSTA",
    16: "KRISTALAI",
    17: "BEVARDĖS",
    18: "PAMUŠALAS",
    19: "KUTI KUTI",
    20: "Į SAULĘ",
    21: "VARPAI",
    22: "RUPŪŽĖ",
    23: "VARPELIS",
    24: "MAGNETAS",
    25: "ANTIMAČO",
    26: "KUNIGĖLIS",
    27: "AKMENYS",
    28: "NUODĖMĖ",
    29: "FIGA",
    30: "ATLEISK",
    31: "ŽVIRGŽDAS",
    32: "JAJA",
    33: "PLAŠTAKĖLĖS",
    34: "ŠIRDIS",
    35: "GALVOSŪKIS",
    36: "GAUDYKLĖ",
    37: "AKROBATAS",
    38: "BANDYMAS IŠEITI",
    39: "SAULĖS ŠOKIS",
    40: "IKI",
    41: "LAPAS",
    42: "VAINIKAS",
    43: "PRARAJA",
    44: "SLENKSTIS",
    45: "ANAPUS",
    46: "TRAUKA",
    47: "TYRAI",
    48: "NUOJAUTA",
    49: "SVAJA",
    50: "ŠALIA",
    51: "BE IŠEITIES",
    52: "IŠGIRSK",
    53: "SEKRETAS",
    54: "ARTI",
    55: "RIBA",
    56: "KODAS",
    57: "NE AŠ",
    58: "OAZĖ",
    59: "LINČAS",
    60: "DRAKONAS",
    61: "EGZAMINAS",
    62: "DĖSNIS",
    63: "VADAS",
    64: "VEDLYS",
    65: "KRYŽKELĖ",
    66: "TUŠTUMA",
    67: "KAS AŠ",
    68: "LAKMUSAS",
    69: "STYGA",
    70: "VIRTUOZAS",
    71: "GALUKELĖ",
    72: "NUTRŪKĘS",
    73: "SIUNTINYS",
    74: "TAMSA",
    75: "PALEISTI",
    76: "SAPNAS",
    77: "VILTIS",
    78: "RYTAS",
    79: "ALTORIUS",
    80: "LINKĖJIMAI",
    81: "PAKVIESK",
    82: "PRIGLAUSK",
    83: "SPRIGTAS",
    84: "ŽAIDĖJA",
    85: "PILNATIS",
    86: "BEVARDĖ",
    87: "LAIŠKAS",
    88: "GLOBĖJAS",
    89: "ATSARGA",
    90: "ATSAKAS",
    91: "VARDAS",
    92: "ATBULOM",
    100: "SUFLERIS",
    101: "IN JAN",
    102: "PRABA",
    103: "ŽEBERKLAS",
    104: "VEIDRODIS",
    105: "KITI",
    106: "VIRŠŪNĖ",
    107: "TABU",
    108: "DUOBĖ",
    109: "ŽENKLAI",
    110: "ATEINU",
    111: "DEBESIS",
    112: "UŽANTYJE",
    113: "VIJURKAS",
    114: "ABORTAS",
    115: "UGNIS",
    116: "ĮPĖDINĖ",
    117: "PAMINKLAI",
    118: "SLAPUKĖ",
    119: "NEPRAŠYTA",
    120: "DUKART",
    121: "PRIEŠTARA",
    122: "REVERANSAI",
    123: "DELTA",
    124: "ODA",
  });
});

test("GET /backend/:knyga/:chapeter streams a file", async () => {
  const chapter = encodeURIComponent("Į SAULĘ");

  const response = await request(app)
    .get(`/backend/nemunai-teka-i-drakono-kalnus/${chapter}`)
    .buffer(true)
    .parse((res, callback) => {
      const chunks = [];

      res.on("data", (chunk) => chunks.push(Buffer.from(chunk)));
      res.on("end", () => callback(null, Buffer.concat(chunks)));
      res.on("error", callback);
    });

  assert.equal(response.status, 200);
  assert.ok(response.headers["content-type"]);
  assert.ok(response.headers["content-length"]);
  assert.equal(response.headers["accept-ranges"], "bytes");
  assert.ok(response.body.length > 0);
});
