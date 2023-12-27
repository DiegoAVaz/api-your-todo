const { db } = require("../config/database");

const criarUsuarioModel = async (nome, sobrenome, email, username, senha) => {
  try {
    const [idusuario] = await db("usuarios").insert({
      nome,
      sobrenome,
      email,
      username,
      senha,
    });

    return idusuario;
  } catch (error) {
    console.log(error);
    return "Erro ao cadastrar usuário.";
  }
};

module.exports = {
  criarUsuarioModel,
};
