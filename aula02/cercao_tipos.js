// ***** Coerção Explícita
let num = "12"; //
let newNum = Number(num); // converte para 12
console.log(typeof num); // string
console.log(newNum, ' / ', typeof newNum); // number

// Com string que não é número
console.clear();
let num2 = "12a"; // 
let newNum2 = Number(num2); // se torna NaN
console.log(typeof num2); // string
console.log(newNum2, ' / ', typeof newNum2); // number

// Usando parseInt
console.clear();
let num3 = "12"; // 
let newNum3 = Number(num3);
console.log(typeof num3); // string
console.log(newNum3, ' / ', typeof newNum3); // 12 / number

// Usando parseInt com string que não é número
console.clear();
let num4 = "12a"; // 
let newNum4 = parseInt(num4); // parseInt consegue converter esse pra 12
console.log(typeof num4); // string
console.log(newNum4, ' / ', typeof newNum4); // 12 / number

let num5 = "asd12"; // 
let newNum5 = parseInt(num5); // se torna NaN
console.log(typeof num5); // string
console.log(newNum5, ' / ', typeof newNum5); // NaN / number

// Usando +
console.clear();
let num6 = "12"; // 
let newNum6 = +num6; // 12
console.log(typeof num6); // string
console.log(newNum6, ' / ', typeof newNum6); // 12 / number

// Convertendo Numeber para String
console.clear();
let idade = 25;
idade = idade.toString();
//ou
idade = "" + idade; // esse "" força uma concatenação e faz com que o número se torne string

//Number para Boolean 
console.clear();
idade = 25;
let idadeBoolean = !!idade; 
console.log(idadeBoolean);
console.log(typeof idadeBoolean);
/* 
  Conceito de Truthy and Falsy
    -> false
    -> 0, -0 and 0n
    -> "", '' (empty strings)
    -> null, undefined and NaN
    -> document.all
*/

// == e === nos ifs
console.clear();
console.log(25 == '25') // true
console.log(25 === '25') // false


// ***** Coerção Implícita
console.clear();
if( 1 === null) {
  console.log('Condição verdadeira')
} // faz o conversão de null pra número pra tentar fazer essa comparação, que nesse caso dá falsa

let result = "1" / "5";
console.log(result); // 0.2 - faz a divisão normalmente





