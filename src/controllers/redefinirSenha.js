const bcrypt = require("bcrypt");
const {
  atualizarSenhaUsuarioModel,
} = require("../models/atualizarSenhaUsuario");
const { buscarUsuario } = require("../models/buscaUsuarioModel");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

const redefinirSenha = async (req, res) => {
  const secretKey = process.env.SECRET_KEY;

  try {
    const { token } = req.query;
    const { novaSenha } = req.body;

    try {
      const decodedToken = jwt.verify(token, secretKey);

      const user = await buscarUsuario(decodedToken.userId);

      if (!user) {
        return res.status(404).send("Usuário não encontrado");
      }

      const idusuario = decodedToken.userId;

      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);

      const senhaCriptografada = await bcrypt.hash(novaSenha, salt);

      const usuarioAtualizado = atualizarSenhaUsuarioModel(
        idusuario,
        senhaCriptografada
      );

      res.send("Senha atualizada com sucesso");
    } catch (error) {
      res.status(401).send("Token inválido ou expirado");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao processar a solicitação");
  }
};

module.exports = {
  redefinirSenha,
};
