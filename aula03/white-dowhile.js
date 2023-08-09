// while
// let contador = 11;
let contador = 16; // nesse caso não vai nem entrar no while
while (contador < 15) {
  console.log(contador);
  contador++;
}

// Do-while
// contador = 10;
contador = 16; // nesse caso ele roda e imprime o 16. Depois já nao roda mais pois a condição da falsa
do {
  console.log(contador);
  contador++;
} while (contador < 15);