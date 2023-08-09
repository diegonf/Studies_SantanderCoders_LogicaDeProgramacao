// EXERCICIO
// Você foi convidado para desenvolver um script para realizar os sorteios para uma casa
// de apostas (estilo mega sena). O sorteio consiste em 6 dezenas aleatórias, entre 1 e 60.
// Para gerar um número aleatório, pode-se utilizar o método random(), da biblioteca Math:
// Math.round(Math.random() * 10)

// Considerações -> Número sorteado não pode ser repetido
let count = 0;
const sorteio = [];
while (count < 6) {
  const numSorteado = Math.round(Math.random() * 59 + 1);  // random -> num de 0 a 1 | *60 + 1 -> num de 1 a 60 float | round -> int
  
  const numJaFoiSorteado = sorteio.includes(numSorteado);
  if(numJaFoiSorteado) continue;
  
  sorteio.push(numSorteado);
  count++;
}

const resultado = sorteio.sort((a, b) => a - b).reduce((res, item) => res + (item < 10 ? '0' + item : item) + ' ','');
console.log("O sorteio da Mega-Sena é: ", resultado);