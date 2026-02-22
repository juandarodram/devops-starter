const request = require("supertest");
const app = require("../app"); // misma app

describe("GET /users", () => {
  it("should return the list of users", async () => {
    const res = await request(app).get("/users");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0]).toHaveProperty("name");
  });
});