const elementos = {
    number: document.querySelector('#number'),
    resultado: document.querySelector('.resultado'),
};

const somaPartindoDe1 = (valorDigitado) => {
    let soma = 0;
    for(let i=1; i <= Number(valorDigitado); i++) {
        soma += i;
    };
    
    return soma;
};

elementos.number.addEventListener('keyup', () => {
    let soma = somaPartindoDe1(elementos.number.value);
    
    elementos.resultado.innerHTML = `
       <h2>A soma dos inteiros partindo de 1 até o ${elementos.number.value} é ${soma}</h2> 
    `;
}); 

