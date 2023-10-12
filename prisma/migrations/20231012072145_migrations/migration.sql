-- CreateEnum
CREATE TYPE "Language" AS ENUM ('ENG', 'ES', 'FR');

-- CreateTable
CREATE TABLE "publishers" (
    "id" SERIAL NOT NULL,
    "names" TEXT NOT NULL,
    "joined_date" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "publishers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "newspapers" (
    "id" SERIAL NOT NULL,
    "publisherId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "abstract" TEXT NOT NULL,
    "creation_date" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "newspapers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "newspaper_languages" (
    "id" SERIAL NOT NULL,
    "language" "Language" NOT NULL,

    CONSTRAINT "newspaper_languages_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "newspapers" ADD CONSTRAINT "newspapers_publisherId_fkey" FOREIGN KEY ("publisherId") REFERENCES "publishers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
