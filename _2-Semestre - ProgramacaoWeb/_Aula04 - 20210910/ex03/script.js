const integerNumberElement = document.querySelector('#integerNumber');
const resultElement = document.querySelector('#result');

integerNumberElement.addEventListener('keyup', e => {
    resultElement.innerHTML = Number(integerNumberElement.value) * 2;
});