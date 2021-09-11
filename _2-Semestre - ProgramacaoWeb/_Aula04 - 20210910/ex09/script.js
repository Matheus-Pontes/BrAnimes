const nomeElement = document.querySelector('#nome');
const anoDeNascimentoElement = document.querySelector('#anoDeNascimento');
const resultadoNomeElement = document.querySelector('#resultadoNome');
const resultadoIdadeElement = document.querySelector('#resultadoIdade');
const buttonElement = document.querySelector('#calcular');

let anoAtual = new Date().getFullYear();

buttonElement.addEventListener('click', function() {
    resultadoNomeElement.innerHTML = nomeElement.value;

    resultadoIdadeElement.innerHTML = anoAtual - Number(anoDeNascimentoElement.value);
});