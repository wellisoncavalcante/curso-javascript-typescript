/*
Não podemos criar constantes com palavras reservadas
Constantes precisam ter nomes significativos
Não pode começar o nome de uma constante com um número
Não podem conter espaços ou traços
Utilizamos camelCase
Case-sensitive
Não podemos modificar o valor de uma constante
Não utilizar VAR, utilizar CONST
*/

//const nome = 'Wellison Cavalcante';
//console.log(nome);

const primeiroNumero = '5'
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
let somaTeste = primeiroNumero + segundoNumero;
// console.log(resultado);
// console.log(resultadoDuplicado);
// console.log(resultadoTriplicado);
console.log(somaTeste);
console.log(typeof somaTeste); // string + number = string (concatenação)