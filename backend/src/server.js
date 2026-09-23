require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const pindoramaRoutes = require("./routes/pindoramaRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ mensagem: "API de usuários funcionando" });
});

app.use("/usuarios", userRoutes);
app.use("/pindorama", pindoramaRoutes);

const PORT = Number(process.env.PORT) || 3000;
const MONGODB_URI =
  process.env.MONGODB_URI ||
  process.env.MONGODB_URI_PROD ||
  process.env.mongodb_prod_uri ||
  "mongodb://127.0.0.1:27017/crud_usuarios";

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Conectado ao MongoDB");
  })
  .catch((error) => {
    console.error("Erro ao conectar ao MongoDB:", error.message);
  });