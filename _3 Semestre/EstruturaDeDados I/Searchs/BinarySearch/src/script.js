const $btnOrdinary = document.querySelector("#btnOrdenary");
const $btnSearch = document.querySelector("#btnSearch");
const $txtNumber = document.querySelector("#txtNumber");
const $numbers = document.querySelectorAll(".number");
const $result = document.querySelector("#result");
const $fieldOrdenary = document.querySelector("#fieldOrdenary");

var numbers = [];
var isOrder = false;

function getNumbers(data) {
    let numbers = [];

    data.forEach( i => {
        numbers.push(Number(i.innerText));
    });

    return numbers;
}

function buildPositionNumbersOrdendados(data) {
    data.forEach(i => {
        $fieldOrdenary.innerHTML += `<div class="number">${i}</div>`;
    })
}

$btnOrdinary.addEventListener('click', function() {
    let numbers = getNumbers($numbers);

    bubbleSort(numbers);

    buildPositionNumbersOrdendados(numbers);

    isOrder = true;
});

$btnSearch.addEventListener('click', function() {
    if(isOrder && $txtNumber.value) {
        let $fieldOrdenaryNumbers = document.querySelectorAll("#fieldOrdenary .number");
        let numbers = getNumbers($fieldOrdenaryNumbers);
        
        let positionNumber = binarySearch(numbers, $txtNumber.value, 0, numbers.length - 1);
    
        if(positionNumber)
            $result.innerText = `A posição do ${$txtNumber.value} é a ${positionNumber + 1}º`;
        else {
            alert("Não temos esse número na nossa lista.");
        }
    }
    else {
        alert('Primeiro ordene os números e informe um número.');
    }
    
});

function binarySearch(array, item, start, end) {
    if(start <= end) {
        middle = Math.round((start + end) / 2);
        if(array[middle] == item)
            return middle;
        if(item < array[middle])
            return binarySearch(array, item, start, middle - 1);
        else 
            return binarySearch(array, item, middle + 1, end);
    }
       
    else 
        return false;
}

function bubbleSort(array) {
    for(let i=0; i < array.length; i++) {
        for(let k=0; k < array.length - 1; k++) {
            if(array[k] > array[k + 1]) {
                changePosition(array, k);
            }
        }
    }
}

function changePosition(array, index) {
    let temp = array[index];
    array[index] = array[index + 1];
    array[index + 1] = temp;
}