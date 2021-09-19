const valorDaCompra = document.querySelector('#valorDaCompra');
const opcoesDeCompra = document.querySelector('#opcoesDeCompra');
const resultado = document.querySelector('.resultados');

document.querySelector('#calcular').addEventListener('click', () => {
    
    switch(opcoesDeCompra.value) {
        case "1":
            resultado.innerHTML = ` 
                <h2>Sua compra será a vista com 10% de desconto.
                    Total da compra R$${(Number(valorDaCompra.value) * 0.9).toFixed(2)}
                </h2>
            `;
        break;

        case "2":
            resultado.innerHTML = ` 
                <h2>Sua compra será no cartão com 5% de desconto.
                    Total da compra R$${(Number(valorDaCompra.value) * 0.95).toFixed(2)}
                </h2>
            `;
        break;

        case "3":
            resultado.innerHTML = ` 
                <h2>Sua compra será parcelada com 10% de juros.
                    Total da compra R$${(Number(valorDaCompra.value) * 1.10).toFixed(2)}
                </h2>
            `;
        break;

        default:
            console.log('DEFAULT');
        break;
    }

    
});