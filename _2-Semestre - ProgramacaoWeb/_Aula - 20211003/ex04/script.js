const display = document.querySelector('#numbers');
const button = document.getElementsByTagName('button');

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
    ponto() {
        display.value += '.';
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
        display.value = eval(display.value);
    }
}

for(let i = 0; i < button.length; i++ ) {
    button[i].addEventListener('click', () => {
        if(buttons[button[i].value]) {
            buttons[button[i].value]();
        }
    });
}