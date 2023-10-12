-- DropForeignKey
ALTER TABLE "newspapers" DROP CONSTRAINT "newspapers_publisherId_fkey";

-- AddForeignKey
ALTER TABLE "newspapers" ADD CONSTRAINT "newspapers_publisherId_fkey" FOREIGN KEY ("publisherId") REFERENCES "publishers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
