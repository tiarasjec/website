/*
  Warnings:

  - You are about to drop the column `email` on the `faculty` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `faculty` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `faculty` table. All the data in the column will be lost.
  - You are about to drop the column `order_id` on the `payments` table. All the data in the column will be lost.
  - You are about to drop the column `payment_id` on the `payments` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `students` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `students` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `students` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `faculty` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderCreationId` to the `payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `razorpayPaymentId` to the `payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `students` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
-- DROP INDEX "faculty_email_key";

-- DropIndex
-- DROP INDEX "students_email_key";

-- AlterTable
ALTER TABLE "faculty"
DROP COLUMN "name",
DROP COLUMN "phone",
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "payments" DROP COLUMN "order_id",
DROP COLUMN "payment_id",
ADD COLUMN     "orderCreationId" TEXT NOT NULL,
ADD COLUMN     "razorpayPaymentId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "students"
DROP COLUMN "name",
DROP COLUMN "phone",
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "faculty" ADD CONSTRAINT "faculty_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
