/*
  Warnings:

  - You are about to drop the `_faculty_coordinators` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_student_coordinators` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `coordinators` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_faculty_coordinators" DROP CONSTRAINT "_faculty_coordinators_A_fkey";

-- DropForeignKey
ALTER TABLE "_faculty_coordinators" DROP CONSTRAINT "_faculty_coordinators_B_fkey";

-- DropForeignKey
ALTER TABLE "_student_coordinators" DROP CONSTRAINT "_student_coordinators_A_fkey";

-- DropForeignKey
ALTER TABLE "_student_coordinators" DROP CONSTRAINT "_student_coordinators_B_fkey";

-- DropTable
DROP TABLE "_faculty_coordinators";

-- DropTable
DROP TABLE "_student_coordinators";

-- DropTable
DROP TABLE "coordinators";

-- CreateTable
CREATE TABLE "faculty_coordinators" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "faculty_coordinators_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "student_coordinators" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "student_coordinators_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EventTostudentCoordinator" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EventToFacultyCoordinator" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_EventTostudentCoordinator_AB_unique" ON "_EventTostudentCoordinator"("A", "B");

-- CreateIndex
CREATE INDEX "_EventTostudentCoordinator_B_index" ON "_EventTostudentCoordinator"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EventToFacultyCoordinator_AB_unique" ON "_EventToFacultyCoordinator"("A", "B");

-- CreateIndex
CREATE INDEX "_EventToFacultyCoordinator_B_index" ON "_EventToFacultyCoordinator"("B");

-- AddForeignKey
ALTER TABLE "_EventTostudentCoordinator" ADD CONSTRAINT "_EventTostudentCoordinator_A_fkey" FOREIGN KEY ("A") REFERENCES "events"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventTostudentCoordinator" ADD CONSTRAINT "_EventTostudentCoordinator_B_fkey" FOREIGN KEY ("B") REFERENCES "student_coordinators"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToFacultyCoordinator" ADD CONSTRAINT "_EventToFacultyCoordinator_A_fkey" FOREIGN KEY ("A") REFERENCES "events"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToFacultyCoordinator" ADD CONSTRAINT "_EventToFacultyCoordinator_B_fkey" FOREIGN KEY ("B") REFERENCES "faculty_coordinators"("id") ON DELETE CASCADE ON UPDATE CASCADE;
