const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/", userController.listarUsuarios);
router.get("/:id", userController.buscarUsuario);
router.post("/", userController.criarUsuario);
router.put("/:id", userController.atualizarUsuario);
router.delete("/:id", userController.excluirUsuario);

module.exports = router;
