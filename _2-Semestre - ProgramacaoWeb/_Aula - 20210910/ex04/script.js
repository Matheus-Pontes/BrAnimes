const number1Element = document.querySelector('#number1');
const number2Element = document.querySelector('#number2');
const buttonElement = document.querySelector('#calcular');
const resultElement = document.querySelector('#resultado');

buttonElement.addEventListener('click', () => {
    var soma = Number(number1Element.value) + Number(number2Element.value);

    resultElement.innerHTML = soma;
});