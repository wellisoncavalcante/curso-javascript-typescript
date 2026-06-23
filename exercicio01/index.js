const nome = 'Wellison';
const sobrenome = 'Cavalcante';
const idade = 23;
const peso = 70;
const alturaEmMetros = 1.73;
let IMC = peso / (alturaEmMetros**2);
const anoDeNascimento = 2026-idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`)
console.log(`tem ${alturaEmMetros} de altura e seu IMC é de: ${IMC}`)
console.log(`${nome} ${sobrenome} nasceu em: ${anoDeNascimento}`)

