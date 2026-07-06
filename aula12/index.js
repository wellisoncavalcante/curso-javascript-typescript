let num1 = 1500;
let num2 = 2.5;

//console.log(num1.toString() + num2);
// toString() converte o número em string, então a saída será "15002.5" (uma concatenação de strings).
//console.log(typeof num1);
// O operador typeof retorna o tipo do valor, então a saída será "number".

//console.log(num1.toString(2)); // Converte o número 1500 para binário.

let num3 = 10.57891234567;
//console.log(num3.toFixed(2)); // Arredonda o número para 2 casas decimais.

//console.log(Number.isInteger(num3)); 
// Verifica se o número é inteiro. A saída será false, pois num3 é um número decimal.

//console.log(Number.isFinite(num3)); 
// Verifica se o número é finito. A saída será true, pois num3 é um número finito.

//console.log(Number.isNaN(num3)); 
// Verifica se o valor é NaN (Not a Number). A saída será false, pois num3 é um número válido.

//console.log(Number.isSafeInteger(num3)); 
// Verifica se o número é um inteiro seguro. A saída será false, pois num3 é um número decimal.

//console.log(Number.parseFloat(num3));
// Converte o valor para um número de ponto flutuante. A saída será 10.57891234567

let temp = num3 * 'Olá';
//console.log(Number.isNaN(temp));
// Verifica se o resultado da operação é NaN. A saída será true, pois multiplica string com number.