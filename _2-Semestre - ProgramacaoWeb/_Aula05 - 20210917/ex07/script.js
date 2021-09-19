const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');
const sexo = document.querySelector('#sexo');
const resultado = document.querySelector('#resultado');

document.querySelector('#calcular')
    .addEventListener('click', () => {

        let IMC = (Number(peso.value) / (Number(altura.value)**2)).toFixed(2);

        switch(sexo.value) {
            case "1":
                if(IMC < 19.1){
                    resultado.innerHTML = `
                        <h2>Seu IMC: ${IMC}[kg/m²]. Você está abaixo do peso.</h2>
                    `;
                } else if(IMC >= 19.1 && IMC < 25.8) {
                    resultado.innerHTML = `
                        <h2>Seu IMC: ${IMC}[kg/m²]. Você está no peso normal.</h2>
                    `;
                } else if(IMC >= 25.8 && IMC < 27.3) {
                    resultado.innerHTML = `
                        <h2>Seu IMC: ${IMC}[kg/m²]. Você está ligeiramente acima do peso.</h2>
                    `;
                } else if(IMC >= 27.3 && IMC < 32.3) {
                    resultado.innerHTML = `
                        <h2>Seu IMC: ${IMC}[kg/m²]. Você está acima do peso ideal.</h2>
                    `;
                } else if(IMC >= 32.3) {
                    resultado.innerHTML = `
                        <h2>Seu IMC: ${IMC}[kg/m²]. Você está OBESA.</h2>
                    `;
                }
            break;
            
            case "2":
                if(IMC < 20.7) {
                    resultado.innerHTML = `
                        <h2>Seu IMC: ${IMC}[kg/m²]. Você está abaixo do peso.</h2>
                    `;
                } else if(IMC >= 20.7 && IMC < 26.4) {
                    resultado.innerHTML = `
                        <h2>Seu IMC: ${IMC}[kg/m²]. Você está no peso normal.</h2>
                    `;
                } else if(IMC >= 26.4 && IMC < 27.8) {
                    resultado.innerHTML = `
                        <h2>Seu IMC: ${IMC}[kg/m²]. Você está ligeiramente acima do peso.</h2>
                    `;
                } else if(IMC >= 27.8 && IMC < 31.1) {
                    resultado.innerHTML = `
                        <h2>Seu IMC: ${IMC}[kg/m²]. Você está acima do peso ideal.</h2>
                    `;
                } else if (IMC >= 31.1) {
                    resultado.innerHTML = `
                        <h2>Seu IMC: ${IMC}[kg/m²]. Você está OBESO.</h2>
                    `;
                }
            break;

            default:
                console.log('testes');
                break;
        }
    }
);