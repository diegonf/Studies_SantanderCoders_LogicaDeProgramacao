/*
  Faça um programa que converta da notação de 24 horas para a notação de 12 horas.
  Por exemplo, o programa deve converter 14:25 em 2:25 P.M. 
  Deve haver pelo menos duas funções: uma para fazer a conversão e uma para a saída.
*/

function converterHora(horas_str) {
  const [horas, minutos] = horas_str.split(':').map(Number);
  // .map(Number) -> transforma todos os itens da array em Number

  return {
    horas: horas % 12 || 12,
    periodo: horas < 12 ? 'AM' : 'PM',
    minutos,
  }
}

function saida(hora) {
  const { horas, minutos, periodo } = converterHora(hora);
  const horaConvertida_str = `${horas.toString().padStart(2, 0)}:${minutos.toString().padStart(2, 0)} ${periodo}`
  console.log('Horário: ', horaConvertida_str);
}
saida('00:00');
saida('00:30');
saida('04:23');
saida('11:50');
saida('12:00');
saida('12:30');
saida('15:00');
saida('23:00');
saida('23:59');

// padStart(2,0) -> preenche com zeros até ter 2 caracteres pelo menos