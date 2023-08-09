// EXERCÍCIO
// Crie um algoritmo usando o for que leia uma lista.
// Retorne duas novas listas, uma contendo apenas os números pares e outra, os ìmpares.
// Esta lista deve ser assim: [1, 2, 3, 4, 5, 6, 7, 8, 9];
const lista = [1, 2, 3, 4, 5];
const pares = [];
const impares = [];

for (let i = 0; i < lista.length; i++) {
  const num = lista[i];
  const ehPar = num % 2 === 0;
  if(ehPar) {
    pares.push(num);
  } else {
    impares.push(num);
  }
}

console.log("Lista: ", lista);
console.log("Pares: ", pares);
console.log("Impares: ", impares);
console.log(typeof pares[0])


// EXERCICIO
// Você é um professor, e tem uma lista com alguns alunos (sendo objetos),
// que contém nome, nota1 e nota2. Use o for para percorer esse array
// e calcular a média das duas notas de cada aluno
// Ao fonal, imprimir o nome do aluno e a sua média
console.clear();
const students = [
  { nome: 'Diego', notas: [7, 9, 8] },
  { nome: 'Lucas', notas: [8, 0, 10] },
  { nome: 'Aline', notas: [3, 5] },
]

for (const aluno of students) {
  const media = aluno.notas.reduce ((total, valor) => (total + valor), 0) / aluno.notas.length;
  console.log(`A média do aluno ${aluno.nome} é: ${media.toFixed(2)}`);
}
