/* 
  - Funções
    - é uma cidadã de primeira classe (first-class citizen)
      - Significa que suporta todas as operações
    - Sintaxe normal
      - sintaxe function nome (parametros) { return: (opcional)}
      -sem o "return" ela retorna undefined
    - Sintaxe arrow function
      - const variavel = (parametro) => { }

*/

// sintaxe normal
// declaração de função
function somar1(a,b){
  return a + b;
}

// colocando função na variável
const somar2 = function (a,b) {
  return a + b;
}

// simplificando com arrow function
const somar3 = (a,b) => {
  return a + b;
}

// formas de declarar sem parametro
const ex1 = () => 'ex1'; // já retorna ex1 a string direto
const ex2 = _ => 'ex2'; // retorna ex2. O '_' é pq não pode deixar sem nada ali. Ou deixa o '_' ou o '()'.

// saudação
const saudacao = (nome = 'Fulano', sobrenome = 'da Silva') => {
  console.log(`Olá, ${nome} ${sobrenome}!`);
}