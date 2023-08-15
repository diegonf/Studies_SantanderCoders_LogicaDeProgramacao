/*
  Faça um programa com uma função chamada somaImposto.
  A função possui dois parâmetros formais: taxaImposto, que é a quantia de imposto sobre vendas expressa em porcentagem e custo, que é o custo de um item antes do imposto. 
  A função “altera” o valor de custo para incluir o imposto sobre vendas.
*/

const somaImposto = (taxaImposto, custo) => {
  const valorImposto = custo*(taxaImposto/100);
  const valorTotal = custo + valorImposto;

  return {
    valorAntesImposto: custo,
    valorPosImposto: valorTotal
  }
};

console.log(somaImposto(10, 1000));
