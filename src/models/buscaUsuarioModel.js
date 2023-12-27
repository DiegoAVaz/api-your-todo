const { db } = require("../config/database");

const buscarUsuario = (idusuario) => {
  try {
    const usuario = db
      .select("*")
      .from("usuarios")
      .where({ idusuario: idusuario })
      .first();

    return usuario;
  } catch (error) {
    console.log(error);
    return "Erro ao buscar usuários";
  }
};

module.exports = {
  buscarUsuario,
};
