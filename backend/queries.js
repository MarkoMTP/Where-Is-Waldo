import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function findAllChars() {
  const characters = await prisma.wantedChars.findMany();
  return characters;
}
