const { db } = require("../config/database");

const deletarTarefaModel = async (id_tarefa) => {
  try {
    const tarefa = await db("tarefas").where({ id_tarefa: id_tarefa }).del();

    return tarefa;
  } catch (error) {
    console.error(error);
    throw new Error("Erro ao deletar tarefa");
  }
};

module.exports = {
  deletarTarefaModel,
};
