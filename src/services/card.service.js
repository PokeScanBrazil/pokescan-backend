import prisma from "../lib/prisma.js";
import { runCrawler } from "../Crawler/index.js";

class CardService {
  async findOrCreateCard({ name, collection_1, collection_2 }) {
    console.log("🔵 [Service] Iniciando findOrCreateCard");
    console.log("🔹 Dados recebidos:", { name, collection_1, collection_2 });

    console.log("🟣 [Service] Verificando se card existe no banco...");
    const existingCard = await prisma.card.findFirst({
      where: { name, collection_1, collection_2 },
    });

    console.log("🟣 [Service] Resultado no banco:", existingCard);

    if (existingCard) {
      console.log("🟢 [Service] Card encontrado no banco");
      return existingCard;
    }

    console.log("🟠 [Service] Card não existe. Rodando crawler…");
    const crawlerResult = await runCrawler(name, collection_1, collection_2);

    console.log("🟠 [Service] Retorno do crawler:", crawlerResult);

    if (!crawlerResult) {
      console.log("🔴 [Service] Crawler não encontrou a carta");
      throw new Error("Crawler não encontrou a carta");
    }

    console.log("🟢 [Service] Criando edition se necessário...");

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
      update: {}, // nada para atualizar
    });

    console.log("🟢 [Service] Edition criada/encontrada:", edition);

    console.log("🟢 [Service] Criando card no banco...");
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

    console.log("🟢 [Service] Card criado:", newCard);
    return newCard;
  }
}

export const cardService = new CardService();
export default cardService;
