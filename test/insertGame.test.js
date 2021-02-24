const insertGame = require("../functions/insertGame");
const faker = require("faker");

const gameId = faker.helpers.replaceSymbols("????");

it.skip("should create a game document", async () => {
  const response = await insertGame.handler({
    path: "/functions/insertGame/" + gameId,
    body: '{"user":"me"}',
  });
  expect(response.statusCode).toBe(200);
}, 30000);

it.skip("shouldn't create a game document without a game id", async () => {
  const response = await insertGame.handler({ path: "insertGame" });
  expect(response.statusCode).toBe(400);
});
