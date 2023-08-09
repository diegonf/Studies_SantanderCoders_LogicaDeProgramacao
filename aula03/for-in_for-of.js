// for in
const alunos = [
  { nome: 'Diego', idade: 32 },
  { nome: 'Diego2', idade: 322 },
  { nome: 'Diego3', idade: 323 },
  { nome: 'Diego4', idade: 324 },
  { nome: 'Diego5', idade: 325 },
]

const aluno = alunos[0];
console.log(aluno);

for (const prop in aluno) {
  console.log(`aluno.${prop} = ${aluno[prop]}`)
}

// forEach (pra exemplificar e comparar)
console.clear();
alunos.forEach((aluno, index, alunos) => {
  // index é i indice do array
  // alunos é a array inteira
  // eles não precisam ser declarados ali em cima se não forem utilizados
  console.log(`O aluno ${aluno.nome} tem ${aluno.idade} anos de idade.`)
});

//for of em array
console.clear();
for (const student of alunos) {
  console.log(student);
  console.log(`O aluno ${student.nome} tem ${student.idade} anos de idade.`)
}

//utilizando só uma pare do objeto
console.clear();
for (const { nome } of alunos) { // { nome } => se chama desestruturação (destructuring)
  console.log(`O aluno ${nome} é top!`)
}

// exemplo de desestruturação e spread
const dadosAluno = {
  nome: 'Diego',
  idade: 32,
  endereco: {
    rua: 'Batista Franco Rodrigues',
    num: 174
  },
  contatos: [
    '11 94387-8950',
    '11 94387-8900'
  ]
}

console.clear();
const { endereco, contatos, ...restoDosDados } = dadosAluno;
console.log(endereco);
console.log(contatos);
console.log(restoDosDados); //restoDosDados pega as outras propriedades que não são nem endereco e nem contatos