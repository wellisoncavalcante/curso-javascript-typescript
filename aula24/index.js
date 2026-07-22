// if pode ser usado sozinho
// Sempre que utilizo a palavra else, preciso de um if antes.
// Eu posso ter diversos else if na checagem
// Só posso ter um else na checagem
// Podemos usar condições sem else if, utilizando apenas if e else

const hora = 18;

if (hora >= 0 && hora <= 11) {
    console.log('Saudações, bom dia!');
}

else if (hora >= 12 && hora <= 17) {
    console.log('Saudações, boa tarde!');
}

else if (hora >= 18 && hora <= 23) {
    console.log('Saudações, boa noite!');
}

else {
    console.log('Horário fora do padrão');
} 