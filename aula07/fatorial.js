/* 
    Faça uma rotina com e sem recursão em JavaScript para encontrar o fatorial de um número.
    n! = n.(n – 1).(n – 2).(n – 3)...2,1. 
*/

const calcularFatorialRecursivo = (n) => {
  return n < 1 ? null : n === 1 ? n : n * calcularFatorialRecursivo(n-1)
};

const calcularFatorialIterativo = (n) => {
  let fatorial = 1;
  for (let i = n; i > 0; i--) {
    fatorial *= i;
  }
  return fatorial;
}

const n = 5;
console.log('Fatorial Recursivo: ', calcularFatorialRecursivo(n));
console.log('Fatorial Iterativo: ', calcularFatorialIterativo(n));
