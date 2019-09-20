const request = require('supertest')

const server = require('./server.js')

describe("server.js", () => {
    describe("index route", () => {
        it("should return status 200 from index route", async () => {
            const expectedStatus = 200;

            const response = await request(server).get("/")
            expect(response.status).toEqual(expectedStatus);
        })
    })
})