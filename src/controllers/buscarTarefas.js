const { buscarTarefasModel } = require("../models/buscarTarefasModel");

const buscarTarefas = async (req, res) => {
  try {
    const { idusuario } = req.query;

    const tarefas = await buscarTarefasModel(idusuario);

    if (tarefas.length == 0) {
      return res.status(200).json({ msg: "Não há tarefas adicionadas" });
    }

    return res.status(200).json({ tarefas: tarefas });
  } catch (error) {
    console.error(error);
    return res.json({ msg: "Erro ao buscar tarefas" });
  }
};

module.exports = {
  buscarTarefas,
};
