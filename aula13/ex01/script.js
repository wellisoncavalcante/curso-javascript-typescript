const number = Number(prompt('Digite um número'));
const numberTitle = document.getElementById('number');
const texto = document.getElementById('texto');

numberTitle.innerHTML = number;

texto.innerHTML += `<p> O número informado é: ${number} </p>`;
texto.innerHTML += `<p> A raiz quadrada é igual a: ${number**(1/2)}</p>`;
texto.innerHTML += `<p>${number} é Inteiro? ${Number.isInteger(number)}</p>`;
texto.innerHTML += `<p>Ele é Not a Number (NaN)? ${Number.isNaN(number)}</p>`;
texto.innerHTML += `<p>Arrendodado para cima é: ${Math.ceil(number)}</p>`;
texto.innerHTML += `<p>Arredondado para baixo é: ${Math.floor(number)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${number.toFixed(2)}</p>`;
