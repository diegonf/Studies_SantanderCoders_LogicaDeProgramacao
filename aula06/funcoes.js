/* 
  Funções de alta ordem
    Funções que retornam outra função
    Funções que recebem outra função como argumento
  Funções puras e impuras
    Puras: retornam o mesmo resultado para a mesma entrada
    Impuras: dependem de valores internos a ela 
*/


const consolePersonalizado = () => {
  return (texto) => console.log(texto);
}

const mostrarNoConsole = consolePersonalizado();
mostrarNoConsole('Oi dev!');


