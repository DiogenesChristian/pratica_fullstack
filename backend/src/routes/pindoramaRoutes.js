const express = require("express");
const controller = require("../controllers/pindoramaController");

const router = express.Router();

router.get("/", controller.listarPindoramas);
router.get("/:id", controller.buscarPindorama);
router.post("/", controller.criarPindorama);
router.put("/:id", controller.atualizarPindorama);
router.delete("/:id", controller.excluirPindorama);

module.exports = router;
