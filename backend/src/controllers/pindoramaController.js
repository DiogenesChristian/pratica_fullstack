const Pindorama = require("../models/pindorama");

async function listarPindoramas(req, res) {
  try {
    const items = await Pindorama.find().populate("user");
    res.json(items);
  } catch (error) {
    res.status(500).json({ mensagem: error.message });
  }
}

async function buscarPindorama(req, res) {
  try {
    const item = await Pindorama.findById(req.params.id).populate("user");

    if (!item) return res.status(404).json({ mensagem: "Registro não encontrado" });

    res.json(item);
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
}

async function criarPindorama(req, res) {
  try {
    const novo = await Pindorama.create(req.body);
    const populado = await novo.populate("user");
    res.status(201).json(populado);
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
}

async function atualizarPindorama(req, res) {
  try {
    const atualizado = await Pindorama.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    }).populate("user");

    if (!atualizado) return res.status(404).json({ mensagem: "Registro não encontrado" });

    res.json(atualizado);
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
}

async function excluirPindorama(req, res) {
  try {
    const excluido = await Pindorama.findByIdAndDelete(req.params.id);

    if (!excluido) return res.status(404).json({ mensagem: "Registro não encontrado" });

    res.status(204).send();
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
}

module.exports = {
  listarPindoramas,
  buscarPindorama,
  criarPindorama,
  atualizarPindorama,
  excluirPindorama
};
