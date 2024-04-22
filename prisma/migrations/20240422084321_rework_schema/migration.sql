/*
  Warnings:

  - You are about to drop the `_EventToFaculty` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_EventToRegisteredUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_EventToStudent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `events` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `faculty` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `registeredusers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `students` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_EventToFaculty" DROP CONSTRAINT "_EventToFaculty_A_fkey";

-- DropForeignKey
ALTER TABLE "_EventToFaculty" DROP CONSTRAINT "_EventToFaculty_B_fkey";

-- DropForeignKey
ALTER TABLE "_EventToRegisteredUser" DROP CONSTRAINT "_EventToRegisteredUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_EventToRegisteredUser" DROP CONSTRAINT "_EventToRegisteredUser_B_fkey";

-- DropForeignKey
ALTER TABLE "_EventToStudent" DROP CONSTRAINT "_EventToStudent_A_fkey";

-- DropForeignKey
ALTER TABLE "_EventToStudent" DROP CONSTRAINT "_EventToStudent_B_fkey";

-- DropForeignKey
ALTER TABLE "events" DROP CONSTRAINT "events_user_id_fkey";

-- DropForeignKey
ALTER TABLE "faculty" DROP CONSTRAINT "faculty_user_id_fkey";

-- DropForeignKey
ALTER TABLE "registeredusers" DROP CONSTRAINT "registeredusers_user_id_fkey";

-- DropForeignKey
ALTER TABLE "students" DROP CONSTRAINT "students_user_id_fkey";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "events" TEXT[];

-- DropTable
DROP TABLE "_EventToFaculty";

-- DropTable
DROP TABLE "_EventToRegisteredUser";

-- DropTable
DROP TABLE "_EventToStudent";

-- DropTable
DROP TABLE "events";

-- DropTable
DROP TABLE "faculty";

-- DropTable
DROP TABLE "registeredusers";

-- DropTable
DROP TABLE "students";
