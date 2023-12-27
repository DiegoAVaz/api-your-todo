const { db } = require("../config/database");

const buscarTarefasModel = async (idusuario) => {
  try {
    const tarefa = await db
      .select("*")
      .from("tarefas")
      .where({ idusuario: idusuario });

    return tarefa;
  } catch (error) {
    console.error(error);
    return "Erro ao buscar tarefa";
  }
};

module.exports = {
  buscarTarefasModel,
};
