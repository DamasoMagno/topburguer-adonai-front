-- CreateEnum
CREATE TYPE "role" AS ENUM ('admin', 'user');

-- CreateTable
CREATE TABLE "user" (
    "id" UUID NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "name" TEXT,
    "avatar_url" TEXT,
    "role" "role" NOT NULL DEFAULT 'user',
    "created_at" TIMESTAMPTZ,
    "updated_at" TIMESTAMPTZ,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_phone_key" ON "user"("phone");
