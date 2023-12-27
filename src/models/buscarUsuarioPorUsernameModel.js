const { db } = require("../config/database");

const buscarUsuarioPorUsernameModel = async (username) => {
  try {
    const usuario = await db
      .select("*")
      .from("usuarios")
      .where({ username: username })
      .first();

    console.log(usuario);

    return usuario;
  } catch (error) {
    console.log(error);
    return "Erro ao buscar usuários";
  }
};

module.exports = {
  buscarUsuarioPorUsernameModel,
};
