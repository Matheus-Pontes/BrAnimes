const nota1Element = document.querySelector('#number1');
const nota2Element = document.querySelector('#number2');
const nota3Element = document.querySelector('#number3');
const resultadoElement = document.querySelector('#resultado');
const buttonElement = document.querySelector('#somar');

buttonElement.addEventListener('click', function(){

    let soma = (Number(nota1Element.value) + Number(nota2Element.value) + Number(nota3Element.value));
    resultadoElement.innerHTML = soma;
});