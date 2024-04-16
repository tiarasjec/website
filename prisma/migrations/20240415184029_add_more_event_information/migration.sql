/*
  Warnings:

  - Added the required column `dateEnding` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rules` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `events` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "events" ADD COLUMN     "cost" INTEGER NOT NULL DEFAULT 250,
ADD COLUMN     "dateEnding" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "rules" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;
