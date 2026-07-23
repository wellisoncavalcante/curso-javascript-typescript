// const tresHoras = 3600 * 3 * 1000; 
// const umDia = 3600 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia); // 01/01/1970 Timestamp unix, ou época unix
// O resultado é dia 31/12/1969 às 21h pq meu GMT é -3
// const data = new Date(2026, 6, 22, 21, 38, 999);
// const data = new Date('2026-07-22 21:58:59');
// const data = new Date(Date.now());
// console.log('Dia:', data.getDate());
// console.log('Mês:', data.getMonth()); // Mês começa no 0
// console.log('Ano:', data.getFullYear());
// console.log('Hora:', data.getHours());
// console.log('Minuto:', data.getMinutes());
// console.log('Segundo:', data.getSeconds());
// console.log('Milésimo de segundo:', data.getMilliseconds());
// console.log('Dia da semana:', data.getDay()); // 0 - Domingo, 6 - Sábado
// console.log(data.toString()); 
// console.log(Date.now())

// console.log('='*100)

function zero_a_esquerda(num) {
    return num >= 10 ? num : `0${num}`;
}    

function formataData(data) {
    const dia = zero_a_esquerda(data.getDate());
    const mes = zero_a_esquerda(data.getMonth() + 1);    
    const ano = zero_a_esquerda(data.getFullYear());
    const hora = zero_a_esquerda(data.getHours());
    const minuto = zero_a_esquerda(data.getMinutes());
    const segundo = zero_a_esquerda(data.getSeconds());
    const milesimo = zero_a_esquerda(data.getMilliseconds())  ;
    
    return `${dia}/${mes}/${ano}/  ${hora}:${minuto}:${segundo}:${milesimo}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);