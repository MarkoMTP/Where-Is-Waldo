import prisma from "./prisma/prismaClient.js";

export default async function findAllChars() {
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
