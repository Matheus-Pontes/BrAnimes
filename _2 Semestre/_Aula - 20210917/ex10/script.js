const number = document.querySelector('#number');
const resultado = document.querySelector('#fatorial');

let calculaFatorial = () => {
    let numeroDigitado = Number(number.value);
    let valorDoFatorial = numeroDigitado;
    
    for(let i=1; i < numeroDigitado; i++) {
        valorDoFatorial *= i;
    };
    
    resultado.value = valorDoFatorial;
};

number.addEventListener('keyup', () => {
    calculaFatorial();    
});
