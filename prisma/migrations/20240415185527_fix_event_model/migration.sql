/*
  Warnings:

  - You are about to drop the column `email` on the `faculty` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `students` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "faculty_email_key";

-- DropIndex
DROP INDEX "students_email_key";

-- AlterTable
ALTER TABLE "faculty" DROP COLUMN "email";

-- AlterTable
ALTER TABLE "students" DROP COLUMN "email";
