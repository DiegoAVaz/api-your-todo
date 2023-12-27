const { buscarTarefaModel } = require("../models/buscarTarefaModel");
const { descontarFusoHorario } = require("../utils/descontarFusoHorario");

const buscarTarefa = async (req, res) => {
  try {
    const { id_tarefa } = req.query;

    const tarefa = await buscarTarefaModel(id_tarefa);

    if (tarefa.length == 0) {
      return res.status(404).json({ msg: "Tarefa não encontrada" });
    }

    const tarefaHorarioCerto = descontarFusoHorario(tarefa);

    if (!tarefaHorarioCerto) {
      return res
        .status(500)
        .json({ msg: "Erro ao ajustar o fuso horário da tarefa" });
    }

    return res.status(200).json({ tarefa: tarefaHorarioCerto });
  } catch (error) {
    console.error(error);
    return res.json({ msg: "Erro ao buscar tarefa" });
  }
};

module.exports = {
  buscarTarefa,
};
