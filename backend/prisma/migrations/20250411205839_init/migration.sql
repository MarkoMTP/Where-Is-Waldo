-- CreateTable
CREATE TABLE "WantedChars" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "x" DOUBLE PRECISION NOT NULL,
    "y" DOUBLE PRECISION NOT NULL,
    "isFound" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "WantedChars_pkey" PRIMARY KEY ("id")
);
