-- CreateTable
CREATE TABLE "oauth_account" (
    "provider" TEXT NOT NULL,
    "account_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "oauth_account_provider_account_id_key" ON "oauth_account"("provider", "account_id");

-- CreateIndex
CREATE UNIQUE INDEX "oauth_account_provider_user_id_key" ON "oauth_account"("provider", "user_id");

-- AddForeignKey
ALTER TABLE "oauth_account" ADD CONSTRAINT "oauth_account_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
