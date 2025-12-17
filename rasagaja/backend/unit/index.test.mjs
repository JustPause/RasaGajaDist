import request from "supertest";
import test from "node:test";
import { strict as assert } from "node:assert";

import pkg from "../index.js";
const { app } = pkg;

test("GET /knygos returns a list of books", async () => {
  const response = await request(app).get("/knygos").expect(200);
  assert.deepStrictEqual(response.body, [
    "nemunai-teka-i-drakono-kalnus",
<<<<<<< HEAD
    "klausyti-ištraukos",
=======
    "klausyti-ištrauku",
>>>>>>> main
  ]);
});
