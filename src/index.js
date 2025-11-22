import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import usersRoutes from "./routes/users.js";
import cardRoutes from "./routes/card.routes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json()); // permite receber JSON

// exemplo de rota inicial
app.get("/", (req, res) => {
  res.json({ message: "API funcionando 🚀" });
});

app.use("/users", usersRoutes);
app.use("/card", cardRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
