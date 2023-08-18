/* 
  Dois tipos de erros
    - Erros de sintaxe
    - Erros de tempo de execução

  Tipos de Erros no JS
    - Error -> erro genérico de algo não esperado
    - RangeError -> erro quando um valor não está no intervalo desejado
    - ReferenceError -> erro de referencia / variável não definida
    - SyntaxError -> erro de sintaxe
    - TypeError

  Operações
    - Lançar um erro: Throw
    - Tratar um erro: try-catch
*/

function soma(n1, n2) {
  return n1 + n2 + n3;
}

try {
  console.log(soma(2, 10));
} catch (error) {
  console.log('deu erro');  
}