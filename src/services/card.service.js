import prisma from "../lib/prisma.js";
import { runCrawler } from "../Crawler/index.js";

class CardService {
  async findOrCreateCard({ name, collection_1, collection_2 }) {
    console.log("🔵 [Service] initializing findOrCreateCard");
    console.log("🔹 Data received:", { name, collection_1, collection_2 });

    console.log("🟣 [Service] Cheking if card exist on the database...");
    const existingCard = await prisma.card.findFirst({
      where: { name, collection_1, collection_2 },
    });

    console.log("🟣 [Service] Database result:", existingCard);

    if (existingCard) {
      console.log("🟢 [Service] Card not found in database");
      return existingCard;
    }

    console.log("🟠 [Service] Card not registered. Running Crawler…");
    const crawlerResult = await runCrawler(name, collection_1, collection_2);

    console.log("🟠 [Service] Crawler return:", crawlerResult);

    if (!crawlerResult) {
      console.log("🔴 [Service] Crawler did not find the card");
      throw new Error("Crawler did not find card");
    }

    console.log("🟢 [Service] Creating edition if necessary...");

    const edition = await prisma.edition.upsert({
      where: {
        abbrev_year: {
          abbrev: crawlerResult.abbrev_edition,
          year: parseInt(crawlerResult.year_edition, 10),
        },
      },
      create: {
        name: crawlerResult.edition_name,
        abbrev: crawlerResult.abbrev_edition,
        year: parseInt(crawlerResult.year_edition, 10),
      },
      update: {},
    });

    console.log("🟢 [Service] Edition Found/Created:", edition);

    console.log("🟢 [Service] Inserting card in database...");
    const newCard = await prisma.card.create({
      data: {
        name: crawlerResult.name,
        collection_1: crawlerResult.collection_1,
        collection_2: crawlerResult.collection_2,
        img_url: crawlerResult.image,
        rarity: crawlerResult.rarity,
        card_type: crawlerResult.card_type,
        edition_id: edition.id,
      },
    });

    console.log("🟢 [Service] Creating card:", newCard);
    return newCard;
  }
}

export const cardService = new CardService();
export default cardService;
