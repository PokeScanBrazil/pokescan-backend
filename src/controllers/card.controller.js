import { cardService } from "../services/card.service.js";

export async function findOrCreateCard(req, res) {
  console.log("🔵 [Controller] Chegou requisição:");
  console.log("Query params:", req.query);

  try {
    const { name, collection_1, collection_2 } = req.query;

    if (!name || !collection_1 || !collection_2) {
      console.log("🔴 [Controller] Parâmetros faltando");
      return res.status(400).json({
        error: "Faltam parâmetros. Use: ?name=NAME&collection_1=XXX&collection_2=YYY",
      });
    }

    console.log("🟠 [Controller] Chamando service...");
    const result = await cardService.findOrCreateCard({
      name,
      collection_1,
      collection_2,
    });

    console.log("🟢 [Controller] Service retornou:", result);
    res.json(result);

  } catch (e) {
    console.error("🔥 [Controller] Erro fatal:", e);
    res.status(500).json({ error: "Erro ao processar carta", details: e.message });
  }
}
