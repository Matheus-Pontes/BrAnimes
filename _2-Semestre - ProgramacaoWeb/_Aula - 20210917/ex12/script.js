const elementos = {
    number: document.querySelector('#number'),
    button: document.querySelector('#buttonTentativa'),
    resultado: document.querySelector('.resultado'),
};

const frases = {
    acerto: '<h2>ACERTOU !!!</h2>',
    passouDoIntervalo: '<h2>APENAS DE 0 A 100 !!!</h2>',
    erro: '<h2>ERROU !!!</h2>',
};

function gerandoRandomNumber() {
    return Math.round(Math.random() * 100);
} 

let randomNumber = gerandoRandomNumber();
// console.log(randomNumber);

elementos.button.addEventListener('click', () => {
    // console.log(randomNumber);

    if(Number(elementos.number.value) > 100) {
        elementos.resultado.innerHTML = frases.passouDoIntervalo;
    } else if(Number(elementos.number.value) === randomNumber) {
        elementos.resultado.innerHTML = frases.acerto;
        
    } else {
        elementos.resultado.innerHTML = frases.erro;
    }
});

