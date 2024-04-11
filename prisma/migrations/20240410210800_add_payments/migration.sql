/*
  Warnings:

  - You are about to drop the `_EventToFacultyCoordinator` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_EventToStudentCoordinator` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `faculty_coordinators` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `student_coordinators` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'SUCCESS', 'FAILED');

-- DropForeignKey
ALTER TABLE "_EventToFacultyCoordinator" DROP CONSTRAINT "_EventToFacultyCoordinator_A_fkey";

-- DropForeignKey
ALTER TABLE "_EventToFacultyCoordinator" DROP CONSTRAINT "_EventToFacultyCoordinator_B_fkey";

-- DropForeignKey
ALTER TABLE "_EventToStudentCoordinator" DROP CONSTRAINT "_EventToStudentCoordinator_A_fkey";

-- DropForeignKey
ALTER TABLE "_EventToStudentCoordinator" DROP CONSTRAINT "_EventToStudentCoordinator_B_fkey";

-- DropTable
DROP TABLE "_EventToFacultyCoordinator";

-- DropTable
DROP TABLE "_EventToStudentCoordinator";

-- DropTable
DROP TABLE "faculty_coordinators";

-- DropTable
DROP TABLE "student_coordinators";

-- CreateTable
CREATE TABLE "payments" (
    "id" TEXT NOT NULL,
    "payment_id" TEXT NOT NULL,
    "order_id" TEXT NOT NULL,
    "signature" TEXT NOT NULL,
    "status" "PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "faculty" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "email" TEXT NOT NULL,
    "phone" VARCHAR(20) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "faculty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "students" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "email" TEXT NOT NULL,
    "phone" VARCHAR(20) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EventToStudent" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EventToFaculty" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE INDEX "payments_user_id_idx" ON "payments"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "faculty_email_key" ON "faculty"("email");

-- CreateIndex
CREATE UNIQUE INDEX "students_email_key" ON "students"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_EventToStudent_AB_unique" ON "_EventToStudent"("A", "B");

-- CreateIndex
CREATE INDEX "_EventToStudent_B_index" ON "_EventToStudent"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EventToFaculty_AB_unique" ON "_EventToFaculty"("A", "B");

-- CreateIndex
CREATE INDEX "_EventToFaculty_B_index" ON "_EventToFaculty"("B");

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToStudent" ADD CONSTRAINT "_EventToStudent_A_fkey" FOREIGN KEY ("A") REFERENCES "events"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToStudent" ADD CONSTRAINT "_EventToStudent_B_fkey" FOREIGN KEY ("B") REFERENCES "students"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToFaculty" ADD CONSTRAINT "_EventToFaculty_A_fkey" FOREIGN KEY ("A") REFERENCES "events"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToFaculty" ADD CONSTRAINT "_EventToFaculty_B_fkey" FOREIGN KEY ("B") REFERENCES "faculty"("id") ON DELETE CASCADE ON UPDATE CASCADE;
