import prisma from "./prisma/prismaClient.js";

export async function findAllChars() {
  const characters = await prisma.wantedChars.findMany();
  return characters;
}

export async function updateIsFound(name) {
  try {
    const updatedChar = await prisma.wantedChars.updateMany({
      where: { name },
      data: { isFound: true },
    });

    return updatedChar;
  } catch (err) {
    console.error(`❌ Could not update isFound for ${name}:`, err);
    throw err;
  }
}

export async function addNewStartTime() {
  await prisma.gameTime.create({
    data: {
      startTime: new Date(),
      endTime: new Date(),
    },
  });
}

export async function resetGameCharacters() {
  try {
    await prisma.wantedChars.updateMany({
      data: { isFound: false },
    });
    console.log("Game reset: all characters are now isFound: false");
  } catch (err) {
    console.error("❌ Failed to reset characters:", err);
  }
}

export async function addNewPlayer(userName, gameTime) {
  try {
    await prisma.player.create({
      data: {
        name: userName,
        time: gameTime,
      },
    });
  } catch (err) {
    console.error("Failed to add new player");
  }
}

export async function findLatestTime() {
  try {
    return await prisma.gameTime.findFirst({
      orderBy: { id: "desc" }, // or use createdAt if you have that
    });
  } catch (err) {
    console.error("Failed to find latest time");
  }
}
export async function updateLatestTime(latestTime) {
  try {
    return await prisma.gameTime.update({
      where: { id: latestTime.id },
      data: { endTime: new Date() },
      // Force returning all fields
      select: {
        id: true,
        startTime: true,
        endTime: true,
      },
    });
  } catch (err) {
    console.error("Failed to update latest time", err);
    throw err;
  }
}
export async function getAllPlayers() {
  const players = await prisma.player.findMany({
    orderBy: {
      time: "desc", // ✅ Ascending = shortest time first
    },
  });
  console.log("✅ Sorted players by time ASC:", players);

  return players;
}
