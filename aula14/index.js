 const comidas = ['Frango', 'Arroz', 'Brócolis', 'Feijão'];
//console.log(comidas);
//console.log(comidas[2]);

comidas[0] = 'Carne';
// comidas[0] = 'Carne' substitui o valor do índice 0, que era 'Frango', por 'Carne'

comidas.push('Batatinha-frita');
comidas.push('Cenourinha');
// comidas.push() coloca o item no último índice do array

comidas.unshift('Alface');
// comidas.unshift() coloca o item como o primeiro do índice do array

comidas.pop(); 
// comidas.pop() Remove o último item do array, nesse caso removeu 'Cenourinha'

comidas.shift()
// comidas.shift() Remove o primeiro item do array, nesse caso removeu 'Alface'
console.log(comidas)