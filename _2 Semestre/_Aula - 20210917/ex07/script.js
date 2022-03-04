const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');
const sexo = document.querySelector('#sexo');
const resultado = document.querySelector('#resultado');

document.querySelector('#calcular')
    .addEventListener('click', () => {
        calcular();
    }
);

const calcular = () => {
    let IMC = (Number(peso.value) / (Number(altura.value)**2)).toFixed(2);

    conceituaIMC(IMC);
}

const conceituaIMC = imc => {
    switch(sexo.value) {
        case "1":
            if(imc < 19.1){
                resultado.innerHTML = `
                    Seu IMC: ${imc}[kg/m²]. Você está abaixo do peso.
                `;
            } else if(imc >= 19.1 && imc < 25.8) {
                resultado.innerHTML = `
                    Seu IMC: ${imc}[kg/m²]. Você está no peso normal.
                `;
            } else if(imc >= 25.8 && imc < 27.3) {
                resultado.innerHTML = `
                    Seu IMC: ${imc}[kg/m²]. Você está ligeiramente acima do peso.
                `;
            } else if(imc >= 27.3 && imc < 32.3) {
                resultado.innerHTML = `
                    Seu IMC: ${imc}[kg/m²]. Você está acima do peso ideal.
                `;
            } else if(imc >= 32.3) {
                resultado.innerHTML = `
                    Seu IMC: ${imc}[kg/m²]. Você está OBESA.
                `;
            }
        break;
        
        case "2":
            if(imc < 20.7) {
                resultado.innerHTML = `
                    Seu IMC: ${imc}[kg/m²]. Você está abaixo do peso.
                `;
            } else if(imc >= 20.7 && imc < 26.4) {
                resultado.innerHTML = `
                    Seu IMC: ${imc}[kg/m²]. Você está no peso normal.
                `;
            } else if(imc >= 26.4 && imc < 27.8) {
                resultado.innerHTML = `
                    Seu IMC: ${imc}[kg/m²]. Você está ligeiramente acima do peso.
                `;
            } else if(imc >= 27.8 && imc < 31.1) {
                resultado.innerHTML = `
                    Seu IMC: ${imc}[kg/m²]. Você está acima do peso ideal.
                `;
            } else if (imc >= 31.1) {
                resultado.innerHTML = `
                    Seu IMC: ${imc}[kg/m²]. Você está OBESO.
                `;
            }
        break;

        default:
            resultado.innerHTML = `Selecione um Sexo.`
            break;
    }
}