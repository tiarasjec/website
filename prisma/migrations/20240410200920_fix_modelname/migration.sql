/*
  Warnings:

  - You are about to drop the `_EventTostudentCoordinator` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_EventTostudentCoordinator" DROP CONSTRAINT "_EventTostudentCoordinator_A_fkey";

-- DropForeignKey
ALTER TABLE "_EventTostudentCoordinator" DROP CONSTRAINT "_EventTostudentCoordinator_B_fkey";

-- DropTable
DROP TABLE "_EventTostudentCoordinator";

-- CreateTable
CREATE TABLE "_EventToStudentCoordinator" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_EventToStudentCoordinator_AB_unique" ON "_EventToStudentCoordinator"("A", "B");

-- CreateIndex
CREATE INDEX "_EventToStudentCoordinator_B_index" ON "_EventToStudentCoordinator"("B");

-- AddForeignKey
ALTER TABLE "_EventToStudentCoordinator" ADD CONSTRAINT "_EventToStudentCoordinator_A_fkey" FOREIGN KEY ("A") REFERENCES "events"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToStudentCoordinator" ADD CONSTRAINT "_EventToStudentCoordinator_B_fkey" FOREIGN KEY ("B") REFERENCES "student_coordinators"("id") ON DELETE CASCADE ON UPDATE CASCADE;
