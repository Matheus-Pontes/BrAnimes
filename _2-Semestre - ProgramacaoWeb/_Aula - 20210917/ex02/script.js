const numeroInteiro = document.querySelector('#number');
const resposta = document.querySelector('#res');

numeroInteiro.addEventListener('keyup', () => {
    if(numeroInteiro.value === '') {
        resposta.value = 'Digite um número inteiro';
    } else {
        resposta.value = Number(numeroInteiro.value) % 2 === 0 ? 'PAR' : 'ÍMPAR';
    }
});
