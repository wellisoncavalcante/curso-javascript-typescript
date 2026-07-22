// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso';
const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = 'vermelho';
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);


// if (pontuacaoUsuario < 1000) {
//     console.log('Usuário comum');
// }

// else {
//     console.log('Usuário VIP');
// }

