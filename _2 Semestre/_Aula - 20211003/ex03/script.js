const textElement = document.querySelector('#txt');
const buttonSeparate = document.querySelector('#separate');
const buttonUpper = document.querySelector('#upper');
const resultElement = document.querySelector('.res');

buttonSeparate.addEventListener('click' ,() => {
    resultElement.innerHTML = textElement.value.split('').join(" ");
});

buttonUpper.addEventListener('click' ,() => {
    resultElement.innerHTML = textElement.value.toUpperCase();
});

