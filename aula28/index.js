function getDiaSemanaTexto(dia_semana) {
    let dia_semana_texto;

    switch (dia_semana) {
    case 0:
        dia_semana_texto = 'Domingo';
        return dia_semana_texto;
    case 1:
        dia_semana_texto = 'Segunda-feira';
        return dia_semana_texto;
    case 2:
        dia_semana_texto = 'Terça-feira';
        return dia_semana_texto;
    case 3:
        dia_semana_texto = 'Quarta-feira';
        return dia_semana_texto;
    case 4:
        dia_semana_texto = 'Quinta-feira';
        return dia_semana_texto;
    case 5:
        dia_semana_texto = 'Sexta-feira';
        return dia_semana_texto;
    case 6:
        dia_semana_texto = 'Sábado';
        return dia_semana_texto;
    default:
        dia_semana_texto = '';
        return dia_semana_texto;
    }
}

const data = new Date('2000-1-4 00:00:00');
const dia_semana = data.getDay();
const dia_semana_texto = getDiaSemanaTexto(dia_semana);

console.log(dia_semana, dia_semana_texto);
// if (dia_semana == 0) {
//     dia_semana_texto = 'Domingo';
// }

// else if (dia_semana === 1) {
//     dia_semana_texto = 'Segunda-feira';
// }

// else if (dia_semana === 2) {
//     dia_semana_texto = 'Terça-feira';
// }

// else if (dia_semana === 3) {
//     dia_semana_texto = 'Quarta-feira';
// }

// else if (dia_semana === 4) {
//     dia_semana_texto = 'Quinta-feira';
// }

// else if (dia_semana === 5) {
//     dia_semana_texto = 'Sexta-feira';
// }

// else if (dia_semana === 6) {
//     dia_semana_texto = 'Sábado';
// }

// else {
//     dia_semana = '';
// }

