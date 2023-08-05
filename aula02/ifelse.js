const diaClaro = true;

if(diaClaro === true){
  console.log('Bora pra praia!');
}

if(diaClaro){ // mesma coisa
  console.log('Bora pra praia!');
} else {
  console.log('Deu ruim!');
}

console.clear();
const tenhoDinheiro = false;
if(diaClaro && tenhoDinheiro){
  console.log('Bora pra praia!');
} else {
  console.log('Deu ruim!');
}

// sendo teimoso
console.clear();
if(diaClaro || tenhoDinheiro){
  console.log('Bora pra praia!');
} else {
  console.log('Deu ruim!');
}

// if encadeado
if (false) {

} else if (false) {

} else {

}

// if dentro de if
const temProtesto = true;
if(diaClaro && tenhoDinheiro){
  if(temProtesto) {
    console.log('vou a praia, mas vou pegar um caminho alternativo');
  } else {
    console.log('Sucesso! Bora pra praia!');
  }
} else {
  console.log('Deu ruim! Não vou para a praia!');
}

// operador ternário
console.clear();
const nota = 7;
const passou = nota >= 7 ? 'Aprovado' : 'Reprovado';
console.log(passou);

8 > 7 ? (() => {console.log('oi1'); console.log('oi2');})() : console.log('menor');