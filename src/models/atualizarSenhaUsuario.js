const { db } = require("../config/database");

const atualizarSenhaUsuarioModel = async (idusuario, senha) => {
  try {
    const usuarioAtualizado = await db("usuarios")
      .where({ idusuario: idusuario })
      .update({ senha: senha });

    return usuarioAtualizado;
  } catch (error) {
    console.log(error);
    return "Erro ao cadastrar usuário.";
  }
};

module.exports = {
  atualizarSenhaUsuarioModel,
};
