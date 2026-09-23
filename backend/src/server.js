require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const pindoramaRoutes = require("./routes/pindoramaRoutes");

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ mensagem: "API de usuários funcionando" });
});

const PORT = Number(process.env.PORT) || 3000;
const MONGODB_URI =
  process.env.MONGODB_URI ||
  process.env.MONGODB_URI_PROD ||
  process.env.MONGODB_PROD_URI ||
  process.env.mongodb_prod_uri ||
  "mongodb://127.0.0.1:27017/crud_usuarios";

app.use((req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }

  if (mongoose.connection.readyState === 1) {
    return next();
  }

  return res.status(503).json({
    mensagem: "Banco de dados indisponível no momento. Verifique a conexão do MongoDB."
  });
});

app.use("/usuarios", userRoutes);
app.use("/pindorama", pindoramaRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

mongoose
  .connect(MONGODB_URI, {
    serverSelectionTimeoutMS: 8000,
    maxPoolSize: 10
  })
  .then(() => {
    console.log("Conectado ao MongoDB");
  })
  .catch((error) => {
    console.error("Erro ao conectar ao MongoDB:", error.message);
  });