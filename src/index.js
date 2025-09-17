import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json()); // permite receber JSON

// exemplo de rota inicial
app.get("/", (req, res) => {
  res.json({ message: "API funcionando 🚀" });
});

// importar rotas
import usersRoutes from "./routes/users.js";
app.use("/users", usersRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
