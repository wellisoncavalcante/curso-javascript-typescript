/* 
const array = [1, 2, 3];
array.push(4);
array[0] = 'Wellison';
array = 'Wellison'
console.log(array)

    Não é possível definir uma constante e depois tentar alterar o valor dela. Por exemplo:
    const array = [1, 2, 3];
    array = 'Wellison';
    TypeError: Assignment to constant variable.

    Entretanto, se fosse let, seria possível. Porque let serve para declarar variáveis que podem ter seus
    valores alterados no futuro.

    let array [1, 2, 3];
    array = 'Wellison'
    console.log(array);
    'Wellison'
*/

/* function criaPessoa(nome, sobrenome, idade) {
    return {nome, sobrenome, idade, };
}

const pessoa1 = criaPessoa('Wellison', 'Cavalcante', 22);
const pessoa2 = criaPessoa('Mirelly', 'França', 23);
const pessoa3 = criaPessoa('Sara', 'Cavalcante', 13);
console.log(pessoa1);
console.log(pessoa2)
console.log(pessoa3) */

const pessoa1 = {
    nome: 'Wellison',
    sobrenome: 'Cavalcante',
    idade: 22,

    fala () {
        console.log(`Saudações, me chamo ${this.nome} ${this.sobrenome} e possuo ${this.idade} anos de idade!`)
    }
};

pessoa1.fala();