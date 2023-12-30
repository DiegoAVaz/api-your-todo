const descontarFusoHorario = (tarefa) => {
  try {
    const horario_errado = tarefa[0].horario_tarefa;

    const timestamp = new Date(horario_errado);
    const tresHorasEmMilissegundos = 3 * 60 * 60 * 1000;

    const novoTimestamp = new Date(
      timestamp.getTime() - tresHorasEmMilissegundos
    );

    tarefa[0].horario_tarefa = novoTimestamp.toISOString();

    return tarefa;
  } catch (error) {
    console.error(error);
    return null;
  }
};

module.exports = {
  descontarFusoHorario,
};
