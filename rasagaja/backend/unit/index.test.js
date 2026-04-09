import request from "supertest";
import test from "node:test";
import { strict as assert } from "node:assert";

import app from "../index.js";

test("GET /backend/ returns greeting", async () => {
  const expected =
    "Hello. I see you've stumbled into my back end - that's okay. You can always go back unless you want to look for some data in here, which is possible. You probably won't find anything very interesting... unless you like audiobooks, in which case, sure.";

  const res = await request(app).get("/backend/").expect(200);
  assert.equal(res.text, expected);
});

// await nodeTest.mock("../src/googleDrive.js", () => {
//   return {
//     findIdByName: async () => "fake-doc-id",
//     getBooksList: async () => [
//       "nemunai-teka-i-drakono-kalnus",
//       "klausyti-ištrauku",
//     ],
//     getBookChapterList: async (bookName) => [
//       `${bookName}-chapter-1`,
//       `${bookName}-chapter-2`,
//     ],
//     streamFile: async () => {
//       const { Readable } = await import("node:stream");
//       const stream = new Readable({
//         read() {
//           this.push("chunk-1");
//           this.push(null);
//         },
//       });

//       stream.headers = {
//         "content-type": "text/plain",
//         "content-length": "7",
//       };

//       stream.data = stream;
//       return stream;
//     },
//     googleDrive: async (folderName) => {
//       if (folderName === "NOVELĖS IR KT") {
//         return [
//           { name: "1. PirmaNovele.docx" },
//           { name: "2. AntraNovele.docx" },
//         ];
//       }

//       return [{ name: "some.docx", id: "doc-file-id" }];
//     },
//     googleDrive: async () => {
//       return [];
//     },
//   };
// });

// // IMPORTANT: import AFTER mocks (so Express routes pick mocked deps)
// const pkgModule = await import("../index.js");
// const app = pkgModule.default;

// test("GET /backend/knygos returns a list of books", async () => {
//   const response = await request(app).get("/backend/knygos").expect(200);

//   assert.deepStrictEqual(response.body, [
//     "nemunai-teka-i-drakono-kalnus",
//     "klausyti-ištrauku",
//   ]);
// });

// test("GET /backend/:knyga returns chapter list for known book", async () => {
//   const response = await request(app)
//     .get("/backend/nemunai-teka-i-drakono-kalnus")
//     .expect(200);

//   assert.deepStrictEqual(response.body, [
//     "nemunai-teka-i-drakono-kalnus-chapter-1",
//     "nemunai-teka-i-drakono-kalnus-chapter-2",
//   ]);
// });

// test("GET /backend/doc/noveles returns novel names array", async () => {
//   const response = await request(app).get("/backend/doc/noveles").expect(200);

//   assert.deepStrictEqual(response.body, [
//     "PirmaNovele.docx",
//     "AntraNovele.docx",
//   ]);
// });
