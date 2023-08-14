const supertest = require("supertest");
const app = require("../app");

jest.setTimeout(15000);

app.listen(8000, () => {
  console.log("server running on port 8080");
});

describe("Transaction Route Test", () => {
  it("should return 200 status code", async () => {
    const res = await supertest(app)
      .post("/api/v1/transactions/add-transaction")
      .send({
        transactionType: "income",
        transactionCategory: "salary",
        transactionAmount: 1000,
        transactionDate: "2021-05-05",
        transactionNote: "test",
        transactionUserId: "60a0b4b3e6b0b71f7c9f1b1b",
      });
  });
  expect(200);

  it("edit transaction", async () => {
    const res = await supertest(app)
      .post("/api/v1/transactions/edit-transaction")
      .send({
        transactionType: "income",
        transactionCategory: "salary",
        transactionAmount: 1000,
        transactionDate: "2021-05-05",
        transactionNote: "test",
        transactionUserId: "60a0b4b3e6b0b71f7c9f1b1b",
      });
  });
  expect(200);

  it("delete transaction", async () => {
    const res = await supertest(app)
      .post("/api/v1/transactions/delete-transaction")
      .send({
        transactionType: "income",
        transactionCategory: "salary",
        transactionAmount: 1000,
        transactionDate: "2021-05-05",
        transactionNote: "test",
        transactionUserId: "60a0b4b3e6b0b71f7c9f1b1b",
      });
  });
  expect(200);

    it("get transaction", async () => {
        const res = await supertest(app)
            .post("/api/v1/transactions/get-transaction")
            .send({
            transactionType: "income",
            transactionCategory: "salary",
            transactionAmount: 1000,
            transactionDate: "2021-05-05",
            transactionNote: "test",
            transactionUserId: "60a0b4b3e6b0b71f7c9f1b1b",
            });
        }
    );
    expect(200);

});
