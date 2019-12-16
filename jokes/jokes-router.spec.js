const request = require("supertest");
const server = require("../api/server.js");

describe("jokes-router.js", () => {
  describe("jokes router", () => {
    it("should return status 400 from jokes-router because of middleware", async () => {
      const expectedStatus = 400;

      const response = await request(server).get("/api/jokes");

      expect(response.status).toEqual(expectedStatus);
    });

    // it("should return status 200 with jokes when authenticated", async () => {
    //     const expectedStatus = 200;

    //     const response = await request(server).get("/api/jokes").auth('username', 'password').set()

    // })
  });
});
