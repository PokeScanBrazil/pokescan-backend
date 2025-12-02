import { cardService } from "../services/card.service.js";

export async function findOrCreateCard(req, res) {

  try {
    const { name, collection_1, collection_2 } = req.body;

    if (!name || !collection_1 || !collection_2) {
      console.log("🔴 [Controller] Missing params");
      return res.status(400).json({
        error: "Missing params. Use: ?name=NAME&collection_1=XXX&collection_2=YYY",
      });
    }

    console.log("🟠 [Controller] Calling service...");
    const result = await cardService.findOrCreateCard({
      name,
      collection_1,
      collection_2,
    });

    console.log("🟢 [Controller] Service return:", result);
    res.json(result);

  } catch (e) {
    console.error("🔥 [Controller] Fatal error:", e);
    res.status(500).json({ error: "Error processing the card", details: e.message });
  }
}
