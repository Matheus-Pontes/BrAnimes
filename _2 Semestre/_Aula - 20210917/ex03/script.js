const valor1 = document.querySelector('#valor1');
const valor2 = document.querySelector('#valor2');
const buttonVerificar = document.querySelector('#verificar');
const resposta = document.querySelector('.res');

buttonVerificar.addEventListener('click', () => {
    // console.log('teste');
    if (Number(valor1.value) === Number(valor2.value)) {
        resposta.innerHTML = `<h2>${valor1.value} é igual ao ${valor2.value}</h2>`;
    } else if (valor1.value > valor2.value) {
        resposta.innerHTML = `<h2>${valor1.value} é maior que ${valor2.value}</h2>`;
    } else {
        resposta.innerHTML = `<h2>${valor1.value} é menor que ${valor2.value}</h2>`;
    }
});