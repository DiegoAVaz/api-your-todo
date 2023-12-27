const { db } = require("../config/database");

const buscarTarefaModel = async (id_tarefa) => {
  try {
    const tarefa = await db
      .select("*")
      .from("tarefas")
      .where({ id_tarefa: id_tarefa });

    return tarefa;
  } catch (error) {
    console.error(error);
    return "Erro ao buscar tarefa";
  }
};

module.exports = {
  buscarTarefaModel,
};
