let num1 = 9.54578;
//console.log(Math.floor(num1)); // Math.floor arredonda o número para baixo, então a saída será 9.

//console.log(Math.ceil(num1)); // Math.ceil arredonda o número para cima, então a saída será 10.

//console.log(Math.round(num1)); // Math.round arredonda o número para o inteiro mais próximo.

//console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, -10, -9, 100, 1023, -1123, 999));
// Math.max retorna o maior número entre os valores fornecidos.

//console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, -10, -9, 100, 1023, -1123, 999));
// Math.min retorna o menor número entre os valores fornecidos.

//console.log(Math.random());
// Math.random retorna um número aleatório entre 0 (inclusive) e 1 (exclusivo)

const aleatorio = Math.round(Math.random() * (100 - 1) + 1);
// Math.random() * (100 - 1) + 1) gera um número aleatório entre 1 e 100 (inclusive)
// Math.round arredonda o número aleatório para o inteiro mais próximo
//console.log(aleatorio);

//console.log(Math.pow(2, 5));
// Math.pow(2, 5) retorna 2 elevado à potência de 5 ou pode usar 2**5

//console.log(9 ** (1/2));
// x ** (1/2) retorna a raiz quadrada de x. No exemplo, 9 ** (1/2) retorna 3, que é a raiz quadrada de 9