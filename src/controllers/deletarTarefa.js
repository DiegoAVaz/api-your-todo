const { deletarTarefaModel } = require("../models/deletarTarefaModel");
const { buscarTarefaModel } = require("../models/buscarTarefaModel");

const deletarTarefa = async (req, res) => {
  try {
    const { id_tarefa } = req.query;

    const tarefa_para_deletar = await buscarTarefaModel(id_tarefa);

    if (tarefa_para_deletar.length == 0) {
      return res.status(404).json({ msg: "Tarefa não encontrada" });
    }

    const tarefa = await deletarTarefaModel(id_tarefa);

    return res.status(201).json({ msg: "Tarefa deletada com sucesso!" });
  } catch (error) {
    console.error(error);
    return res.json({ msg: "Erro ao deletar tarefa" });
  }
};

module.exports = {
  deletarTarefa,
};
