const nota1Element = document.querySelector('#nota1');
const nota2Element = document.querySelector('#nota2');
const nota3Element = document.querySelector('#nota3');
const resultadoElement = document.querySelector('#resultado');
const buttonElement = document.querySelector('#calcularMedia');

buttonElement.addEventListener('click', function(){

    let media = (Number(nota1Element.value) + Number(nota2Element.value) + Number(nota3Element.value)) / 3;
    
    console.log(media);

    resultadoElement.innerHTML = media.toFixed(1);
});
