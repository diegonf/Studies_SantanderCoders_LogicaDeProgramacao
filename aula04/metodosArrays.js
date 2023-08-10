/*
  Array -> Métodos de Array
    : Obeto Array.prototype fornece diversos métodos para todos os arrays
    - push
      - adiciona um elemento no final
      - altera o array original
      - retorna o length do novo array
    - pop
      - remove o ultimo elemento
      - altera o array original
      - retorna o elemento que foi removido
    - shift
      - remove o primeiro elemento e atualiza os indices
      - altera o array original
      - retorna o elemento que foi removido
    - at
      - recebe um valor inteiro e utiliza ele como index para retornar o item relacionado a esse item
      - mas aceita valores inteiros negativos também
      - não altera o array original
      - retorna o item encontrado ou undefined se o indice não existir
      - ex 1
    - concat
      - combina dois ou mais arrays em un único
      - não altera o array utilizado
      - retorna um novo array
      - ex2
    - every
      - retorna true se todos os parametros do array passar na condição implementada na função
      - retorna false caso contrário
      - não altera o array original
    - filter
      - filtra elementos da lista que satisfazem a condição implementada
      - retorna esses itens ou uma array vazia se não tiver nenhum valor
      - não altera o array principal
    - find
      - busca o primeiro elemento que satisfaz a condição implementada
      - retorna o elemento encontrado ou undefined caso não encontre nenhum
      - não altera o array principal
      - ex de uso: procurar um item cujo id seja x em um array de objetos
    - forEach
      - itera elemento a elemento
      - não retorna nada
      - não altera o array original
    - map
      - itera elemento a elemento
      - cria um novo array preenchido com os resultados da função fornecida
      - não altera o array original
    - reduce
      - reduz um array a um único valor
      - não altera o array original
    - reverse
      - inverte a ordem dos elementos em um array
      - altera o array original
    - some
      - itera elemento a elemento e checa a condição implementada
      - retorna true se encontrar pelo menos um item que satisfaça a condição (para se executar quando encontra o primeiro)
      - retorna false se não encontrar nenhum
    - sort
      - ordena arrays
      - altera a array original
      - não retorna nada

*/

// ex 1 - at()
const fruits = ['apple', 'banana', 'grape', 'mango', 'orange'];
console.log(fruits.at(1)); // banana
console.log(fruits.at(-1)); // orange

// ex2 - concat()
console.clear();
const arrConcat1 = [1,2,3]
const arrConcat2 = [2,3,4]
const arrConcat3 = ['a',4,5]
const arrConcatNew = arrConcat1.concat(arrConcat2, arrConcat3);
console.log(arrConcatNew); // [1, 2, 3, 2, 3, 4, 'a', 4, 5]

// ex3
const arr = [1, 11, 2, 3, 4, 33]
arr.sort();
console.log(arr)


// pra estudar
// console.clear();
// const arr = Array(6);
// arr.push(1);
// console.log(arr);
// num & 1 === 0 -> codição pra par com bitwise
// num & 1 === 1 -> codição pra impar com bitwise

