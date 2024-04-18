/*
  Warnings:

  - The primary key for the `payments` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `payments` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "payments" DROP CONSTRAINT "payments_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "payments_pkey" PRIMARY KEY ("razorpayPaymentId");
