const supertest = require("supertest");
const app = require("../app");

jest.setTimeout(15000);

app.listen(8080, () => {
  console.log("server running on port 8080");
});

describe("User Route Test", () => {
  it("should return 200 status code", async () => {
    const res = await supertest(app).post("/api/v1/users/login").send({
      email: "astika@gmail.com",
      password: "123456",
    });
    expect(res.status).toBe(200);
  });

  it("Login ", async () => {
    const res = await supertest(app).post("/api/v1/users/register").send({
      name: "astika",
      email: "astika@gmail.com",
      password: "123456",
    });
    expect(res.status).toBe(200);
  });

  it("invalid login", async () => {
    const res = await supertest(app).post("/api/v1/users/login").send({
      email: "astika@gmail.com",
      password: "12345",
    });
    expect(res.status).toBe(400);
  });
});
