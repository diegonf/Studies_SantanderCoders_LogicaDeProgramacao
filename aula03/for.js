// For com valor maximo fixo
for (let i = 0 /*inicialização*/; i < 9 /*regra de controle*/; i++/*iteração da variável de controle*/) {
  console.log(i); // 0, 1, 2, ..., 8
}

// For com valor maximo dinamico de acordo com tamanho da array
console.clear();
const arr = [1, 2, 3, 4, 10]
for (let i = 0; i < arr.length; i++) {
  console.log(arr [i]);
}

// Omitindo blocos no for
console.clear();
let i = 0; //para omitir primeiro bloco
for (; i < 3; i++) {
  //solução que omite o primeiro bloco e que funciona, mas não é elegante
}

i = 0;
for (; ; i++) {
  //solução que omite também o segundo bloco e que funciona, mas também não é elegante
  if(i >= 3) {
    break;
  }
}

i = 0;
for (;;) {
  //solução que omite também o terceiro bloco e que funciona, mas também não é elegante
  if(i >= 3) {
    break;
  }
  console.log(i);
  i++;
}

// objetos
console.clear();
const alunos = [
  { nome: 'Diego', idade: 32 }, 
  { nome: 'Diego2', idade: 322 }, 
  { nome: 'Diego3', idade: 323 }, 
  { nome: 'Diego4', idade: 324 }, 
  { nome: 'Diego5', idade: 325 }, 
]
// percorrendo com for
for (let i = 0; i < alunos.length; i++) {
  console.log(`O aluno ${alunos[i].nome} tem ${alunos[i].idade} anos de idade.`)
}
