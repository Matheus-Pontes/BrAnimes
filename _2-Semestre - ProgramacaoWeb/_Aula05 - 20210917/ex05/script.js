const nota1 = document.querySelector('#nota1');
const nota2 = document.querySelector('#nota2');
const nota3 = document.querySelector('#nota3');
const buttonCalcular = document.querySelector('#calcular');
const resposta = document.querySelector('.res');

buttonCalcular.addEventListener('click', () => {
    let media = (Number(nota1.value) + Number(nota2.value) + Number(nota3.value)) / 3;

    verificaMediaEStatus(media);
});

const verificaMediaEStatus = (media) => {
    if(media >= 3 && media < 6) {
        resposta.innerHTML = `<h2> Sua média é ${media.toFixed(2)} e seus status é EXAME</h2>`;
    } else if(media >= 6) {
        resposta.innerHTML = `<h2> Sua média é ${media.toFixed(2)} e seus status é APROVADO</h2>`;
    } else {
        resposta.innerHTML = `<h2> Sua média é ${media.toFixed(2)} e seus status é REPROVADO</h2>`;
    }
};
