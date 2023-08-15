/*
  Operador || 
    Conceito de falsy -> undefined, null, '', 0, false, NaN (e outros)
  Coalescencia
    Conceito de nullish -> undefined ou null
*/

// Utilizando o OU ||
let user;
let username = user?.name || 'Usuário sem nome'; // Usuário sem nome
console.log('username: ', username);

user = { }
username = user?.name || 'Usuário sem nome'; // Usuário sem nome
console.log('username: ', username);

user = {
  name: 'Diego'
}
username = user?.name || 'Usuário sem nome'; // Diego
console.log('username: ', username);

// Utilizando coalescencia
console.clear();
user = {
  name: ''
}
username = user?.name ?? 'Usuário sem nome'; // '' -> a string vazia é considerada um valor normal, verdadeiro, então ele pega e atribui isso ao username.
console.log('username: ', username);

