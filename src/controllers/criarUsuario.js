const bcrypt = require("bcrypt");
const { criarUsuarioModel } = require("../models/criarUsuarioModel");
const { buscarUsuario } = require("../models/buscaUsuarioModel");
const {
  buscarUsuarioPorUsernameModel,
} = require("../models/buscarUsuarioPorUsernameModel");

const criarUsuario = async (req, res) => {
  try {
    const { nome, sobrenome, email, username, senha } = req.body;

    const usernameExiste = await buscarUsuarioPorUsernameModel(username);

    if (usernameExiste) {
      return res
        .status(400)
        .json({ msg: "Já existe um usuário com esse username" });
    }

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);

    const senhaCriptografada = await bcrypt.hash(senha, salt);

    const idNovoUsuario = await criarUsuarioModel(
      nome,
      sobrenome,
      email,
      username,
      senhaCriptografada
    );

    const buscaNovoUsuario = await buscarUsuario(idNovoUsuario);

    const response = {
      id: buscaNovoUsuario.idusuario,
      nome: buscaNovoUsuario.nome,
      sobrenome: buscaNovoUsuario.sobrenome,
    };

    return res.status(201).json({ novoUsuario: response });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Erro inesperado ao cadastrar usuário" });
  }
};

module.exports = {
  criarUsuario,
};
