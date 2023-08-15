/*
  Seja n o enésimo termo da sequência de Fibonacci, ele é calculado como:
  F(n) = F(n-1) + F(n-2)
  Ou seja, cada elemento da sequência é a soma dos dois anteriores, onde:
  F(1) = 0
  F(2) = 1
  Crie um script que pede ao usuário um termo qualquer da série de Fibonacci e ele exiba tal termo.
  Ex: 0, 1, 1, 2, 3, 5, 8, 13
*/

const listaFibonacci = (termo) => {
  const listaFib = [0, 1];
  for (let i = 2; i < termo; i++){
    const proxTermo = listaFib[i-1] + listaFib[i-2];
    listaFib.push(proxTermo);
  }
  return listaFib;
};

console.log(listaFibonacci(5));
console.log(listaFibonacci(10));
console.log(listaFibonacci(20));

