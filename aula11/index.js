let helloWorld = "Olá, \"mundo\"!"; 
/* O uso de aspas duplas dentro de uma string delimitada por aspas duplas requer o uso de barra invertida (\) 
para escapar as aspas internas. */
//console.log(helloWorld);

let javascript = "Olá, \\JavaScript!";
//console.log(javascript);
//console.log(javascript[6]); 
// Acessando o caractere na posição 6 da string "Olá, \JavaScript!"
// Se pegar algo fora do limite da string, o resultado será undefined

//console.log(javascript.charAt(0)); 
//console.log(javascript.charAt(100));
// Acessando o caractere na posição 0 da string "Olá, \JavaScript!" usando charAt()
// Se pegar algo fora do limite da string utilizando charAt(), o resultado será uma string vazia

//console.log(javascript.concat(" é uma linguagem de programação."));
/* concat() é um método que concatena (junta) duas ou mais strings 
 e retorna uma nova string resultante da junção. */

//console.log(javascript.indexOf("JavaScript"));
// indexOf() é um método que retorna o índice da PRIMEIRA OCORRêNCIA de uma substring dentro de uma string.

//console.log(javascript.indexOf("JavaScript", 7));
// indexOf() também pode receber um segundo parâmetro que indica a posição inicial para a busca da substring.
// ele retorna -1 se a substring não for encontrada a partir da posição indicada.

//console.log(javascript.lastIndexOf("a"));
// lastIndexOf() é um método que retorna o índice da última ocorrência de uma substring dentro de uma string.

//console.log(javascript.replace("JavaScript", "JS"));
// replace() é um método que substitui a primeira ocorrência de uma substring por outra substring e retorna
// uma nova string com a substituição realizada. Ele não altera a string original.

//console.log(javascript.match(/[a-z]/g));
// match() é um método que busca por correspondências de uma expressão regular dentro de uma string e retorna
// um array com todas as correspondências encontradas. No caso, a expressão regular /[a-z]/g busca por todas
// as letras minúsculas do alfabeto de (a a z) na string e retorna um array com todas as correspondências
// encontradas. O modificador "g" indica que a busca deve ser global, ou seja, encontrar todas as ocorrências
// e não apenas a primeira. Se não houver correspondências, o método retorna null.

//console.log(javascript.search(/[a-z]/g));
// search() é um método que busca por correspondências de uma expressão regular dentro de uma string e retorna
// o índice da primeira correspondência encontrada. No caso, a expressão regular /[a-z]/g busca por todas
// as letras minúsculas do alfabeto de (a a z) na string e retorna o índice da primeira correspondência

//console.log(javascript.search(/J/));
// No caso, a expressão regular /J/ busca pela letra "J" na string e retorna o índice da primeira correspondência
// Se não houver correspondências, o método retorna -1.

//console.log(javascript.length);
// length é uma propriedade que retorna o número de caracteres em uma string.

//console.log(javascript.slice(6, 17));
// slice() é um método que extrai uma parte de uma string e retorna uma nova string.
//console.log(javascript.slice(-7));
// slice() também pode receber índices negativos, que indicam a posição a partir do final da string.

let rato = "O rato roeu a roupa do rei de Roma.";
//console.log(rato.split(" "));
// split() é um método que divide uma string em um array de substrings, usando um separador especificado.

//console.log(rato.split("r"));
//console.log(rato.split("r", 3));
// O segundo parâmetro do split() é opcional e indica o número máximo de substrings a serem incluídas no array
//console.log(rato.split("w"));
// A string será dividida em um array de substrings, usando a letra "r" como separador. Ela não será
// incluída nas substrings resultantes. O resultado será um array com substrings que não contêm a letra "r".
// Se a letra "r" não for encontrada na string, o resultado será um array com a string original como único
// elemento. Se a string estiver vazia, o resultado será um array vazio.

//console.log(rato.toUpperCase());
//console.log(rato.toLowerCase());
// toUpperCase() e toLowerCase() são métodos que retornam uma nova string com todos os caracteres
// convertidos para maiúsculas ou minúsculas, respectivamente. Eles não alteram a string original.