function get_dia_da_semana(dia_semana) {
    let dia_semana_texto;
    switch(dia_semana) {
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

function get_mes_do_ano (mes) {
    let mes_texto;
    switch(mes) {
        case 0:
            mes_texto = 'Janeiro';
            return mes_texto;
        case 1:
            mes_texto = 'Fevereiro';
            return mes_texto;
        case 2:
            mes_texto = 'Março';
            return mes_texto;
        case 3:
            mes_texto = 'Abril';
            return mes_texto;
        case 4:
            mes_texto = 'Maio';
            return mes_texto;
        case 5:
            mes_texto = 'Junho';
            return mes_texto;
        case 6:
            mes_texto = 'Julho';
            return mes_texto;
        case 7:
            mes_texto = 'Agosto';
            return mes_texto;
        case 8:
            mes_texto = 'Setembro';
            return mes_texto;
        case 9:
            mes_texto = 'Outubro';
            return mes_texto;
        case 10:
            mes_texto = 'Novembro';
            return mes_texto;
        case 11:
            mes_texto = 'Dezembro';
            return mes_texto        

    }
}

const data = new Date();
const dia_semana = data.getDay();
const dia = data.getDate();
const mes = data.getMonth();
const ano = data.getFullYear();
const hora = data.getHours();
const minuto = data.getMinutes();
const dia_semana_texto = get_dia_da_semana(dia_semana);
const mes_texto = get_mes_do_ano(mes);

function exibirData() {
    const data_formatada = document.querySelector("#data_formatada");
    data_formatada.textContent = `${dia_semana_texto}, ${dia} de ${mes_texto} de ${ano} ${hora}:${minuto}`;
}
exibirData()