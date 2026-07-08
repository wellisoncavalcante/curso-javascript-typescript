# Tipos primitivos (imutáveis)
string, number, boolean, undefined, null (bigint, symbol)

let nome = 'Wellison';
nome = 'Cavalcante';
console.log(nome); >>>>>> Cavalcante

let nome = 'Wellison';
nome[1] = 'a'; 
console.log(nome[1]); >>>>>> e

> Portanto, nome[1] = 'a', não faz nada, visto que strings são imutáveis.

let a = 'A';
let b = a; // Cópia

console.log(a, b); >>>>>> A A

a = 'Outra coisa';
console.log(a, b); >>>>>> Outra coisa A

> Quando fez let b = a; b fez uma cópia do valor atual de a, que no caso é 'A'.
> Depois quando foi alterado a variável a, b ainda possui a cópia antiga de a.

# Referência (mutáveis)
array, object, function

let a = [1, 2, 3];
let b = a;
console.log(a, b); >>>>>> [1, 2, 3] [1, 2, 3]

a.push(4, 5);

console.log(a, b) >>>>>> [1, 2, 3, 4, 5] [1, 2, 3, 4, 5]