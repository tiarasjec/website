-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('PARTICIPANT', 'ADMIN');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "registrationEmailSent" BOOLEAN DEFAULT false,
ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'PARTICIPANT';
