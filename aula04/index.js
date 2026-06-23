let nome = 'Wellison';
let nome2 = 'Mirelly';
let teste; // Declarando a variável sem um valor
teste = 'Agora ela possui um valor';

console.log(nome, 'nasceu em 2003');
console.log('Em 2024' , nome , 'conheceu', nome2);
console.log(nome, 'casou-se com', nome2, 'em 2030');
console.log(nome2, 'teve 1 filho com', nome, 'em 2035');
console.log('O filho de', nome, 'chama-se Nicolas');

console.log(teste);

/* Não podemos criar variáveis com palavras reservadas.
    let let (não pode porque é palavra reservada da linguage,)
    let console
    let if   */

/* Variáveis preisam ter nomes significativos
    let nomeCliente = 'Wellison'; */

/* Não pode começar o nome de uma variável com número
    let 1nome; */

/* Não podem conter espaços ou traços. Utilizamos camelCase
    let nomeCompletoDoCliente = 'Wellison Cavalcante';   */

/* Case-sensitive (letras minúsculas e maiúsculas faz diferença)
    let nomeCliente = 'Wellison'
    let nomecliente = 'Wallison'    */

/* Não podemos redeclarar variáveis com let
    let nomeCliente = 'Wellison'
    nomeCliente = 'Cavalcante'
    let nomeCliente = 'Oliveira' * ERROR*   */

// Não utilizar var, utilizar let.
