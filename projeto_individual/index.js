import listaClientes from './clientes.json' assert {type: 'json'};
import { checarDiaSemana } from './checa-dia-semana.js';
import { enviarEmail } from './envia-email.js';
import { montarEmail } from './monta-email.js';

const dispararMktSemanal = () => {
  //passo #1
  const ehDiaDeEmail = checarDiaSemana();
  if(!ehDiaDeEmail) {
    console.log('Ops! Hoje não é dia de enviar email...');
    return;
  }

  listaClientes.forEach(cliente => {
    if(!cliente.subscribed) return;

    //passo #2
    const email = montarEmail(cliente);

    //passo #3
    console.log(Array(100).fill().reduce(acc => acc + '_',''))
    enviarEmail(email.destinatario, email.assunto, email.corpoEmail);
  });

}

dispararMktSemanal();