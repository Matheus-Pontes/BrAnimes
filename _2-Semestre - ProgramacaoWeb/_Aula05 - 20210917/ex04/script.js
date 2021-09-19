const base = document.querySelector('#base');
const altura = document.querySelector('#altura');
const buttonCalcular = document.querySelector('#calcular');
const resposta = document.querySelector('#resposta');

buttonCalcular.addEventListener('click', () => {
    resposta.value = `Seguindo a formula (base x altura) / 2. Temos, área igual ${(base.value * altura.value) / 2}` ;
    
});