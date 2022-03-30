const quantidadeDeValores = 50;
var w = 10;
var heights = [];

function setup() {
    createCanvas(500, 200);
    for(let i=0; i < quantidadeDeValores; i++) {
        heights[i] = Math.floor(Math.random() * (0 + 100) + 0);
    }
    
    insertionSort(heights);
}

function draw() {
    background(0);

    for(let i=0; i < heights.length; i++) {
        noStroke();

        rect(i * w, 200 - heights[i], w, heights[i]);
    }
}

async function insertionSort(array) {
    let i, k, aux;

    for(i=1; i < array.length; i++) {
        aux = array[i];
        k = i;

        while(k > 0 && aux < array[k - 1]) {
            array[k] = array[k - 1];
            k--;
        }

        await sleep(100);
        array[k] = aux;
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
