// exemplo dias da semana - muito mais facil com switch
const dia = 0;
let diaSemana;
switch (dia) {
  case 0:
    diaSemana = "Domingo";
    console.log('console');
    break;
    case 1:
      diaSemana = "Segunda-Feira";
      console.log('console');
    break; // se tirar o break e for case 1, ele vai executar esse bloco e todos os blocos seguintes
  case 2:
    diaSemana = "Terça-Feira";
    console.log('console');
    break;    
  case 3:
    diaSemana = "Quarta-Feira";
    console.log('console');
    break;    
  case 4:
    diaSemana = "Quinta-Feira";
    console.log('console');
    break;    
  case 5:
    diaSemana = "Sexta-Feira";
    console.log('console');
    break;    
  case 6:
    diaSemana = "Sabado";
    console.log('console');
    break;    
  default:
    diaSemana = "Não é um dia da semana valido";
    break;
}

/* 
  case 5:
  case 6:
    pra juntar dois cases
*/