const valorDaCompra = document.querySelector('#valorDaCompra');
const quantidadeDeParcelas = document.querySelector('#quantidadeDeParcelas');
const buttonCalcular = document.querySelector('#calcular');
const resposta = document.querySelector('.res');

buttonCalcular.addEventListener('click', () => {
   verificaParcelasECalculaJuros(quantidadeDeParcelas.value, valorDaCompra.value);
});

const verificaParcelasECalculaJuros = (parcela, valorDaCompra) => {
    switch(Number(parcela)) {
        case 1:
            resposta.innerHTML = `
                <h2>Com ${parcela} parcela temos, 0% de juros. O valor final da compra é R$${Number(valorDaCompra).toFixed(2)}</h2>
            `;
        break;
        case 2:
            resposta.innerHTML = `
                <h2>Com ${parcela} parcelas, temos 3% de juros. O valor final da compra é R$${(Number(valorDaCompra).toFixed(2) * 1.03).toFixed(2)}</h2>
            `;
        break;
        case 4:
            resposta.innerHTML = `
            <h2>Com ${parcela} parcelas, temos 7% de juros. O valor final da compra é R$${(Number(valorDaCompra) * 1.07).toFixed(2)}</h2>
            `;
        break;
        default:
            resposta.innerHTML = `
                <h2>Essa proposta de parcelas não existe em nosso sistema então não terá juros ou desconto. O valor da sua compra é R$${Number(valorDaCompra).toFixed(2)}</h2>
            `;
        break;
    }
}
