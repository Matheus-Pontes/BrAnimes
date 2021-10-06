const display = document.querySelector('#numbers');
const button = document.getElementsByTagName('button');

const functions = {
    somar(number1, number2) {
        let soma = Number(number1) + Number(number2);
        display.value = soma;
    },

    subtrair(number1, number2) {
        let subtrai = Number(number1) - Number(number2);
        display.value = subtrai;
    },

    multiplicar(number1, number2) {
        let multiplica = Number(number1) * Number(number2);
        display.value = multiplica;
    },

    dividir(number1, number2) {
        if(number2 === 0){
            display.value = 'Impossível dividir por 0';
        } else {
            let dividi = Number(number1) / Number(number2);
            display.value = dividi;
        }
    }
}

const buttons = {
    changeSinalNumber: function() {
        display.value *= (-1);
    },
    r: function() {
        display.value **= (1/2);
    },
    dividir() {
        display.value += "/";
    },
    somar() {
        display.value += '+';
    },
    subtrair() {
        display.value += "-";
    },
    multiplicar() {
        display.value += '*';
    },
    clearDisplay() {
        display.value = '';
    },
    "0": function() {
        display.value += 0;
    },
    "1": function() {
        display.value += 1;  
    },
    "2": function() {
        display.value += 2;
    },
    "3": function() {
        display.value += 3;
    },
    "4": function() {
        display.value += 4;
    },
    "5": function() {
        display.value += 5;
    },
    "6": function() {
        display.value += 6;
    },
    "7": function() {
        display.value += 7;
    },
    "8": function() {
        display.value += 8;
    },
    "9": function() {
        display.value += 9;
    },

    "equal": function() {
       
        let displayAux = display.value.split("");

        console.log(displayAux);

        displayAux.forEach((el, index) => {
            console.log(el);
            if(el === '+') {
                functions.somar(displayAux[index - 1], displayAux[index + 1]);
            } else if (el === '-'){
                functions.subtrair(displayAux[index - 1], displayAux[index + 1])
            } else if (el === '*') {
                functions.multiplicar(displayAux[index - 1], displayAux[index + 1]);
            } else if (el === '/'){
                functions.dividir(displayAux[index - 1], displayAux[index + 1]);
            }
        });

    }
}

for(let i = 0; i < button.length; i++ ) {
    button[i].addEventListener('click', () => {
        if(buttons[button[i].value]) {
            buttons[button[i].value]();
        }
    });
}

