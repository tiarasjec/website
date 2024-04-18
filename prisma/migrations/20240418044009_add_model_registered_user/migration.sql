/*
  Warnings:

  - You are about to drop the column `cost` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `dateEnding` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `rules` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `events` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "events" DROP COLUMN "cost",
DROP COLUMN "dateEnding",
DROP COLUMN "rules",
DROP COLUMN "type";

-- CreateTable
CREATE TABLE "registeredusers" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "college" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "registeredusers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EventToRegisteredUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "registeredusers_user_id_key" ON "registeredusers"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "_EventToRegisteredUser_AB_unique" ON "_EventToRegisteredUser"("A", "B");

-- CreateIndex
CREATE INDEX "_EventToRegisteredUser_B_index" ON "_EventToRegisteredUser"("B");

-- AddForeignKey
ALTER TABLE "registeredusers" ADD CONSTRAINT "registeredusers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToRegisteredUser" ADD CONSTRAINT "_EventToRegisteredUser_A_fkey" FOREIGN KEY ("A") REFERENCES "events"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToRegisteredUser" ADD CONSTRAINT "_EventToRegisteredUser_B_fkey" FOREIGN KEY ("B") REFERENCES "registeredusers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
