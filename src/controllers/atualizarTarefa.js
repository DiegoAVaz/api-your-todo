const { atualizarTarefaModel } = require("../models/atualizarTarefaModel");
const { buscarTarefaModel } = require("../models/buscarTarefaModel");
const moment = require("moment-timezone");

const atualizarTarefa = async (req, res) => {
  try {
    const { id_tarefa } = req.query;

    const tarefa_para_atualizar = await buscarTarefaModel(id_tarefa);

    if (tarefa_para_atualizar.length == 0) {
      return res.status(404).json({ msg: "Tarefa não encontrada" });
    }

    const { nome_tarefa, descricao_tarefa, horario_tarefa, status } = req.body;

    console.log(horario_tarefa);

    const horarioAjustado = moment(horario_tarefa)
      .subtract(6, "hours")
      .format();

    const tarefa = await atualizarTarefaModel(
      id_tarefa,
      nome_tarefa,
      descricao_tarefa,
      horarioAjustado,
      status
    );

    const tarefa_atualizada = await buscarTarefaModel(id_tarefa);

    return res.status(200).json({ tarefa_atualizada: tarefa_atualizada });
  } catch (error) {
    console.error(error);
    return res.json({ msg: "Erro ao atualizar tarefa" });
  }
};

module.exports = {
  atualizarTarefa,
};
