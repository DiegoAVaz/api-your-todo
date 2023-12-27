const { db } = require("../config/database");

const atualizarTarefaModel = async (
  id_tarefa,
  nome_tarefa,
  descricao_tarefa,
  horario_tarefa,
  status
) => {
  try {
    const tarefa = await db("tarefas").where({ id_tarefa: id_tarefa }).update({
      nome_tarefa,
      descricao_tarefa,
      horario_tarefa,
      status,
    });

    return tarefa;
  } catch (error) {
    console.error(error);
    throw new Error("Erro ao atualizar tarefa");
  }
};

module.exports = {
  atualizarTarefaModel,
};
