let nome = 'Wellison';
nome = 'Cavalcante';
console.log(nome);

let a = [1, 2, 3];
let b = a;
console.log(a, b)

a.push(4, 5);
console.log(a, b)



const c = {
    nome: 'Wellison',
    sobrenome: 'Cavalcante',
};

const d = {...c};
c.nome = 'Draven';

console.log(c);
console.log(d);