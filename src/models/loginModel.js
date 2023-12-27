const { db } = require("../config/database");

const loginModel = async (username) => {
  try {
    const usuario = await db("usuarios")
      .select("*")
      .where({ username: username })
      .first();

    return usuario;
  } catch (error) {
    console.error(error);
    throw new Error("Erro ao autenticar usuário");
  }
};

module.exports = {
  loginModel,
};
