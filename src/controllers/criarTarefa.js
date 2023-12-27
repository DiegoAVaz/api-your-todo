const { criarTarefaModel } = require("../models/criarTarefaModel");
const moment = require("moment-timezone");

const criarTarefa = async (req, res) => {
  try {
    const { nome_tarefa, descricao_tarefa, horario_tarefa } = req.body;
    const { idusuario } = req.query;

    const horarioAjustado = moment(horario_tarefa)
      .subtract(3, "hours")
      .format();

    const tarefa = await criarTarefaModel(
      nome_tarefa,
      descricao_tarefa,
      horarioAjustado,
      idusuario
    );

    return res.status(201).json({ tarefa_criada: tarefa });
  } catch (error) {
    console.error(error);
    return res.json({ msg: "Erro ao criar tarefa" });
  }
};

module.exports = {
  criarTarefa,
};
