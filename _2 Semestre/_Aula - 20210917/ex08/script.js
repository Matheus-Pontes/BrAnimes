const salario = document.querySelector('#salario');
const resultadoIR = document.querySelector('#IR');

const aliquotaIR = {
    isento: 0,      // 0 %    
    baixo: 0.075,   // 7.5 %
    medio: 0.15,    // 15 %
    alto: 0.225,    // 22.5 %
    bemAlto: 0.275, // 27.5 % 
}

let resultadoDoIR = {
    isento() {
        resultadoIR.value = `${(salario.value * aliquotaIR.isento).toFixed(2)}`;
    }, 
    baixo() {
        resultadoIR.value = `${(salario.value * aliquotaIR.baixo).toFixed(2)}`;
    }, 
    medio() {
        resultadoIR.value = `${(salario.value * aliquotaIR.medio).toFixed(2)}`;
    },
    alto() {
        resultadoIR.value = `${(salario.value * aliquotaIR.alto).toFixed(2)}`;
    },
    bemAlto() {
        resultadoIR.value = `${(salario.value * aliquotaIR.bemAlto).toFixed(2)}`;
    }
}

document.querySelector('#calculaIR').addEventListener('click', () => {
    if(Number(salario.value) <= 1434) {
        resultadoDoIR.isento();
    } else if (Number(salario.value) > 1434 && Number(salario.value) <= 2150) {
        resultadoDoIR.baixo();
    } else if (Number(salario.value) > 2150 && Number(salario.value) <= 2866) {
        resultadoDoIR.medio();
    } else if (Number(salario.value) > 2866 && Number(salario.value) <= 3582) {
        resultadoDoIR.alto();
    } else if (Number(salario.value) > 3582) {
        resultadoDoIR.bemAlto();
    }
});