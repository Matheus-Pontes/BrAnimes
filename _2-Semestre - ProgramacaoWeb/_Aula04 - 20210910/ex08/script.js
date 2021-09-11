const baseElement = document.querySelector('#base');
const alturaElement = document.querySelector('#altura');
const resultadoElement = document.querySelector('#resultado');
const buttonElement = document.querySelector('#calcular');

buttonElement.addEventListener('click', function() {
    let area = Number(baseElement.value) * Number(alturaElement.value) / 2;

    resultadoElement.innerHTML = area;
});