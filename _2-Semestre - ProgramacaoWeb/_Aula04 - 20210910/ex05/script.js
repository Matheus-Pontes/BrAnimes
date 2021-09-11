const numberElement = document.querySelector('#number');
const resultElement = document.querySelector('#result');

numberElement.addEventListener('keyup', () => {
    let seuQuadradoEh = Number(numberElement.value ** 2);

    resultElement.innerHTML = seuQuadradoEh;
});