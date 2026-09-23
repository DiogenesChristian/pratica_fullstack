const User = require("../models/User");

async function listarUsuarios(req, res) {
  try {
    const usuarios = await User.find();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ mensagem: error.message });
  }
}

async function buscarUsuario(req, res) {
  try {
    const usuario = await User.findById(req.params.id);

    if (!usuario) {
      return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    res.json(usuario);
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
}

async function criarUsuario(req, res) {
  try {
    const usuario = await User.create(req.body);
    res.status(201).json(usuario);
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
}

async function atualizarUsuario(req, res) {
  try {
    const usuario = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!usuario) {
      return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    res.json(usuario);
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
}

async function excluirUsuario(req, res) {
  try {
    const usuario = await User.findByIdAndDelete(req.params.id);

    if (!usuario) {
      return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    res.status(204).send();
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
}

module.exports = {
  listarUsuarios,
  buscarUsuario,
  criarUsuario,
  atualizarUsuario,
  excluirUsuario
};
