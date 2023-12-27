const { buscarUsuario } = require("../models/buscaUsuarioModel");

const buscaUsuario = async (req, res) => {
  try {
    const { idusuario } = req.query;
    const usuarios = await buscarUsuario(idusuario);

    if (!usuarios) {
      return res.status(500).json({ msg: "Usuário não encontrado" });
    }

    return res.status(200).json(usuarios);
  } catch (error) {
    console.log(error);
    return res.json({ msg: "Erro inesperado" });
  }
};

module.exports = {
  buscaUsuario,
};
