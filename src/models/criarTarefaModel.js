const { db } = require("../config/database");

const criarTarefaModel = async (
  nome_tarefa,
  descricao_tarefa,
  horario_tarefa,
  idusuario
) => {
  try {
    const tarefa = await db("tarefas").insert({
      nome_tarefa,
      descricao_tarefa,
      horario_tarefa,
      idusuario,
    });

    console.log(tarefa);

    return tarefa;
  } catch (error) {
    console.error(error);
    return "Erro ao criar tarefa";
  }
};

module.exports = {
  criarTarefaModel,
};
