const request = require("supertest");
const server = require("../api/server")

describe("auth-router.js", () => {
  describe("auth route", () => {
    it("should return status 201 from auth register route", async () => {
      const expectedStatus = 201;

      const response = await request(server)
        .post("/api/auth/register")
        .send({ username: "mommy", password: "patel" });
        
      expect(response.status).toBe(expectedStatus);
    });
  });
});

