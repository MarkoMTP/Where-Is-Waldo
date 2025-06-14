import index from "../index.js";

import request from "supertest";
import app from "../server.js";
import { afterAll, beforeEach, describe, expect, it } from "vitest";

//prisma setup

import prisma from "../prisma/prismaClient.js";

afterAll(async () => {
  await prisma.$disconnect();
});

describe("Routes", () => {
  beforeEach(async () => {
    await prisma.wantedChars.deleteMany();
    await prisma.wantedChars.createMany({
      data: [
        { name: "Joker", x: 77, y: 76.7, isFound: true },
        { name: "Meg", x: 44.95, y: 288.493, isFound: false },
        { name: "Batman", x: 4.15, y: 261.2, isFound: true },
      ],
    });
  });

  it("Simulates the name does not exist api error", async () => {
    const res = await request(app).get("/check/waldo/22/55");

    expect(res.status).toBe(404);
    expect(res.text).toMatch(/the name does not match/i);
  });
  it("Simulates the coordinates do not match", async () => {
    const res = await request(app).get("/check/Meg/22/22");

    expect(res.status).toBe(404);
    expect(res.text).toMatch(/Name matched but coordinates don't/i);
  });
  it("Simulates the character name and coords matching", async () => {
    const res = await request(app).get("/check/Meg/44.95/288");

    expect(res.status).toBe(200);
    expect(res.text).toEqual("Game Finished Congratulations!");
  });

  it("Simulates STARTGAME route", async () => {
    const res = await request(app).get("/start");

    expect(res.status).toBe(200);
    expect(res.text).toEqual("Game started");
  });

  it("End Game route success", async () => {
    const res = await request(app)
      .post("/end")
      .set("Content-Type", "application/json")
      .send({
        userName: "John",
        time: 82,
      });

    expect(res.status).toBe(200);
    expect(res.text).toEqual("Game Completed in 0ms");
  });

  it("Misses username for end route", async () => {
    const res = await request(app).post("/end").send({
      userName: "",
      time: 82,
    });

    expect(res.status).toBe(400);
    expect(res.text).toEqual("Missing username.");
  });

  it("Successfully finds players for leaderboard", async () => {
    const res = await request(app).get("/leaderboard");

    expect(res.status).toBe(200);
  });
  it("Returns 404 when no players are found", async () => {
    // ✅ Clear the Player table before running the test
    await prisma.player.deleteMany();

    const res = await request(app).get("/leaderboard");

    expect(res.status).toBe(404);
    expect(res.text).toBe("No players found");
  });
});
