// push
let arrPush = [];
arrPush.push(1);
const lengthArray = arrPush.push(2);
console.log("Comprimento array push: ", lengthArray);

// pop
console.clear();
const numeros = [1, 2, 3, 4];
console.log('numeros: ', numeros);
numeros.pop();
console.log("length numeros pop - 1a remoção: ", numeros.length);
numeros.pop();
console.log("length numeros pop - 2a remoção: ", numeros.length);
console.log('numeros: ', numeros);

//shift
console.clear();
const linguagens = ['javascript', 'python', 'golang', 'java'];
console.log('linguages: ', linguagens);
linguagens.shift();
console.log("length linguagens shift - 1a remoção: ", linguagens.length);
linguagens.shift();
console.log("length linguagens shift - 2a remoção: ", linguagens.length);
console.log('linguagens: ', linguagens);

// at
console.clear();
const produtos = ['sabao', 'detergente', 'amaciante', 'alvejante', 'sapolio'];
console.log('produtos: ', produtos);
console.log('primeiro elemento: ', produtos.at(0));
console.log('terceiro elemento: ', produtos.at(2));
console.log('ultimo elemento: ', produtos.at(-1));

//concat
console.clear();
const lista1 = ['banana', 'pera', 'melancia'];
const lista2 = ['alface', 'tomate', 'rucula'];
console.log('lista1: ', lista1);
console.log('lista2: ', lista2);
const lista1e2 = lista1.concat(lista2);
console.log('lista1 + lista2: ', lista1e2);

const lista3 = ['limao', 'laranja', 'acerola'];
const lista4 = ['pimenta', 'pimentao', 'alho'];
const lista123e4 = lista1e2.concat(lista3, lista4);
console.log('lista 1, 2, 3 e 4: ', lista123e4);

// every
console.clear();
const pessoas = [
  { nome: "João", idade: 22 },
  { nome: "Maria", idade: 17 },
  { nome: "Pedro", idade: 18 },
  { nome: "Ana", idade: 22 },
  { nome: "Carlos", idade: 16 }
];
console.log('Todos são maiores de 18 anos? ', pessoas.every(({ idade }) => idade >= 18) ? "Sim!" : "Não!");
console.log('Todos os nomes possuem mais que 3 caracteres? ', pessoas.every(({ nome }) => nome.length > 3) ? "Sim!" : "Não!");
console.log('Todos nome e idade definidos? ', pessoas.every(({ nome, idade }) => !!nome && !!idade) ? "Sim!" : "Não!");

// filter
console.clear();
const alunos = [
  { nome: 'Ana', idade: 20 },
  { nome: 'Pedro', idade: 18 },
  { nome: 'Maria', idade: 22 },
  { nome: 'João', idade: 17 },
  { nome: 'Lucas', idade: 19 },
  { nome: 'Julia', idade: 21 }
];
const alunosMaioresDeIdade = alunos.filter(aluno => aluno.idade >= 18);
console.log('Alunos maiores de idade: ', alunosMaioresDeIdade);

const alunosMenoresQue20 = alunos.filter(aluno => aluno.idade < 20);
console.log('Alunos com idade menor que 20 anos: ', alunosMenoresQue20);

const alunosComJ = alunos.filter(aluno => aluno.nome[0] === 'J');
// const alunosComJ = alunos.filter(aluno => aluno.nome.startsWith('J')); // outra forma
// const alunosComJ = alunos.filter(aluno => aluno.nome.charAt(0) === 'J'); / outra forma
console.log('Alunos com nome inciando com "J": ', alunosComJ);
return;

// find
console.clear();
const lugares = [
  { nome: 'Sala de Reuniões', capacidade: 8 },
  { nome: 'Sala de Treinamento', capacidade: 20 },
  { nome: 'Auditório', capacidade: 50 },
  { nome: 'Sala de Conferências', capacidade: 30 },
  { nome: 'Sala de Estudos', capacidade: 12 }
];

const lugarCapacidade10 = lugares.find(lugar => lugar.capacidade >= 10);
console.log('Lugar com capacidade para 10 pessoas ou mais: ', lugarCapacidade10);

const lugarCapacidade25 = lugares.find(lugar => lugar.capacidade >= 25);
console.log('Lugar com capacidade para 25 pessoas ou mais: ', lugarCapacidade25);

const lugarCapacidade40 = lugares.find(lugar => lugar.capacidade >= 40);
console.log('Lugar com capacidade para 40 pessoas ou mais: ', lugarCapacidade40);

// forEach
console.clear();
const pizzas = [
  { sabor: 'Mussarela', valor: 20 },
  { sabor: 'Calabresa', valor: 25 },
  { sabor: 'Marguerita', valor: 28 },
  { sabor: 'Frango com Catupiry', valor: 32 },
  { sabor: 'Portuguesa', valor: 30 }
];
pizzas.forEach(pizza => console.log(`A pizza de ${pizza.sabor} custa R$ ${pizza.valor.toFixed(2)}`));

// map
const pessoasMap = [
  { nome: 'João', altura: 1.75, peso: 80 },
  { nome: 'Maria', altura: 1.68, peso: 60 },
  { nome: 'Pedro', altura: 1.80, peso: 70 },
  { nome: 'Ana', altura: 1.65, peso: 55 },
  { nome: 'Carlos', altura: 1.90, peso: 100 }
];

const pessoasIMC = pessoasMap.map(({ nome, peso, altura }) => {
  const imc = (peso / (altura * altura)).toFixed(2);
  return {
    nome,
    imc
  }
});
console.log(pessoasIMC);

// reduce
const alunosReduce = [
  { nome: 'Ana', notas: [7, 8, 9] },
  { nome: 'Pedro', notas: [5, 6, 7] },
  { nome: 'Maria', notas: [9, 8, 10] },
  { nome: 'João', notas: [6, 7, 8] },
  { nome: 'Lucas', notas: [8, 9, 8] },
  { nome: 'Julia', notas: [10, 8, 9] }
];

const mediaAlunos = alunosReduce.map(({ nome, notas }) => {
  const media = ((notas.reduce((acum, item) => acum + item, 0)) / (notas.length)).toFixed(2);
  return {
    nome,
    media
  }
});
console.log(mediaAlunos);

// reverse
console.clear();
const numerosReverse = [1, 2, 3, 4, 5];
console.log('numeros: ', numerosReverse)
console.log('numerosReverse: ', numerosReverse.reverse());

// some
console.clear();
const empregados = [
  { nome: 'João', salario: 1200 },
  { nome: 'Maria', salario: 1500 },
  { nome: 'Pedro', salario: 1800 },
  { nome: 'Ana', salario: 1400 },
  { nome: 'Carlos', salario: 2000 }
];

console.log("Algum funcionário com salário >= R$ 1500,00? ", empregados.some(emp => emp.salario >= 1500) ? 'Sim!' : 'Não!');
console.log("Algum funcionário com salário <= R$ 1000,00? ", empregados.some(emp => emp.salario <= 1000) ? 'Sim!' : 'Não!');

// sort
console.clear();
const atletas = [
  { nome: 'João', altura: 1.75, peso: 80 },
  { nome: 'Maria', altura: 1.68, peso: 60 },
  { nome: 'Pedro', altura: 1.80, peso: 70 },
  { nome: 'Ana', altura: 1.65, peso: 55 },
  { nome: 'Carlos', altura: 1.90, peso: 100 }
];

console.log('atletas original: ', atletas);
console.log('atletas ordem crescente peso: ', atletas.sort((a, b) => a.peso - b.peso));
console.log('atletas ordem decrescente altura: ', atletas.sort((a, b) => b.altura - a.altura));
console.log('atletas ordem alfabética nome: ', atletas.sort((a, b) => a.nome.localeCompare(b.nome)));
// console.log('atletas ordem alfabética nome: ', atletas.sort((a, b) => {
//   const nameA = a.nome.toUpperCase(); // ignore upper and lowercase
//   const nameB = b.nome.toUpperCase(); // ignore upper and lowercase
//   if (nameA < nameB) {
//     return -1;
//   }
//   if (nameA > nameB) {
//     return 1;
//   }

//   // names must be equal
//   return 0;
// }));
