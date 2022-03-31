const desorder = document.getElementById("disorder");
const order = document.getElementById("order");
const quantidadeDeValores = 15;

var heights = [];

for(let i=0; i < quantidadeDeValores; i++) {
    heights[i] = Math.floor(Math.random() * (0 + 100) + 0);
}

function setup() {
    for(let i=0; i < quantidadeDeValores; i++){
        desorder.innerHTML += `
            <div class="column" style="height: ${heights[i]}px"></div>
        `;
    }

    quickSort(heights, 0, heights.length - 1);
}

function draw() {
    order.innerHTML = "";
    for(let i=0; i < quantidadeDeValores; i++){
        order.innerHTML += ` 
            <div class="column" style="height: ${heights[i]}px"></div>
        `;
    }
}

function quickSort(array, start, end) {
    if(start < end) {
        let pivotIndex = positionIndex(array, start, end);
        
        setTimeout(() => {
            quickSort(array, start, pivotIndex - 1);
            
        }, 1000);
        setTimeout(() => {
            quickSort(array, pivotIndex + 1, end);

        }, 1000);
    }
}

function positionIndex(array, start, end) {
    let pivot = array[start];
    let i = start + 1;
    let j = end;

    while(i <= j) {
        if (pivot >= array[i]) i++;
        else if (array[j] > pivot) j--;
        else {
            let change = array[i];
            array[i] = array[j];
            array[j] = change;
            i++;
            j--;
        }
    }

    array[start] = array[j];
    array[j] = pivot;

    return j;
}
