const desorder = document.getElementById("disorder");
const order = document.getElementById("order");
const quantidadeDeValores = 15;

var heights = [];

for(let i=0; i < quantidadeDeValores; i++) {
    heights[i] = Math.floor(Math.random() * (0 + 100) + 0);
}

function setup() {
    for(let i=0; i < heights.length; i++){
        desorder.innerHTML += `
            <div class="column" style=" height: ${heights[i]}px"></div>
        `
    }
    setTimeout(() => {
        selectionSort(heights);

    }, 1000);
}

function draw() {
    order.innerHTML = "";
    for(let i=0; i < heights.length; i++) {
        
        order.innerHTML += ` 
            <div class="column" style="height: ${heights[i]}px"></div>
        `; 
    }
}


function selectionSort(array) {
    for(let i=0; i < array.length - 1; i++) {
        
        let min = i;
        for(let k=i +1; k < array.length; k++){
            if(array[k] < array[min])
                min = k;
        }

        let temp = array[i];
        array[i] = array[min];
        array[min] = temp;
    }
}
