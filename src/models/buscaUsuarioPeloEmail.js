const { db } = require("../config/database");

const buscarUsuarioPeloEmail = (email) => {
  try {
    const usuario = db
      .select("*")
      .from("usuarios")
      .where({ email: email })
      .first();

    return usuario;
  } catch (error) {
    console.log(error);
    return "Erro ao buscar usuários";
  }
};

module.exports = {
  buscarUsuarioPeloEmail,
};
