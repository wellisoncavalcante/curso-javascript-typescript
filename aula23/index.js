/*
&& -> false && true -> false. Só é necessário encontrar a primeira condição false para ser false.
|| -> true || false -> true. Só é necessário encontrar a primeira condição true para ser true.

FALSY
false
0
'' "" ``
null / undefined
NaN
*/

console.log('Wellison' && '' & 'Mirelly');
console.log('Wellison' && NaN & 'Mirelly');
console.log('Wellison' && null & 'Mirelly');