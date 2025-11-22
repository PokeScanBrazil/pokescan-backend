-- CreateTable
CREATE TABLE "Edition" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "abbrev" TEXT NOT NULL,
    "year" INTEGER NOT NULL,

    CONSTRAINT "Edition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Card" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "collection_1" TEXT NOT NULL,
    "collection_2" TEXT NOT NULL,
    "img_url" TEXT,
    "rarity" TEXT,
    "card_type" TEXT,
    "edition_id" INTEGER NOT NULL,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Edition_abbrev_year_key" ON "Edition"("abbrev", "year");

-- CreateIndex
CREATE UNIQUE INDEX "Card_collection_1_collection_2_edition_id_key" ON "Card"("collection_1", "collection_2", "edition_id");

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_edition_id_fkey" FOREIGN KEY ("edition_id") REFERENCES "Edition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
