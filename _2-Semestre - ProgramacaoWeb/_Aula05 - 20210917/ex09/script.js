const valor1 = document.querySelector('#valor1');
const valor2 = document.querySelector('#valor2');
const resultado = document.querySelector('#resultado');

const buttons = {
    somar: document.querySelector('#somar'),
    subtrair: document.querySelector('#subtrair'),
    multiplicar: document.querySelector('#multiplicar'),
    dividir: document.querySelector('#dividir'),
}

let operacoesMatematicas = {
    somar() {
        buttons.somar.addEventListener('click', () => {
            resultado.value = `${Number(valor1.value) + Number(valor2.value)}`;
        });
    },

    subtrair() {
        buttons.subtrair.addEventListener('click', () => {
            resultado.value = `${Number(valor1.value) - Number(valor2.value)}`;
        });
    },

    multiplicar() {
        buttons.multiplicar.addEventListener('click', () => {
            resultado.value = `${Number(valor1.value) * Number(valor2.value)}`;
        });
    },

    dividir() {
        buttons.dividir.addEventListener('click', () => {
            if(Number(valor2.value) === 0) {
                resultado.value = "Dividir por 0 impossível";
            } else {
                resultado.value = `${Number(valor1.value) / Number(valor2.value)}`;
            }
        });
    }
}

operacoesMatematicas.somar();
operacoesMatematicas.subtrair();
operacoesMatematicas.multiplicar();
operacoesMatematicas.dividir();






