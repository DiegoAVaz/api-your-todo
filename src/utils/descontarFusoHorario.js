const descontarFusoHorario = (tarefa) => {
  try {
    const horario_errado = tarefa[0].horario_tarefa;

    const timestamp = new Date(horario_errado);
    const tresHorasEmMilissegundos = 3 * 60 * 60 * 1000;

    const novoTimestamp = new Date(
      timestamp.getTime() - tresHorasEmMilissegundos
    );

    // Modificando o objeto tarefa
    tarefa[0].horario_tarefa = novoTimestamp.toISOString();

    // Retornando o objeto tarefa modificado
    return tarefa;
  } catch (error) {
    console.error(error);
    // Em caso de erro, podemos retornar null ou tratar de outra forma
    return null;
  }
};

module.exports = {
  descontarFusoHorario,
};
