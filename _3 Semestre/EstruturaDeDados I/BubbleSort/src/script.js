var heights = [];
var quantidadeDeValores = 50;
var w = 10;

function setup() {
    createCanvas(500, 200);
    for(let i=0; i < quantidadeDeValores; i++) {
        heights[i] = Math.floor(Math.random() * (0 + 100) + 0);
    }

    bubbleSort(heights);
}

function draw() {
    background(0);
    for (let i=0; i < heights.length; i++) {
        noStroke();

        rect(i * w, 200 - heights[i], w, heights[i]);
    }
} 

async function bubbleSort(array) {
    for(let i=0; i < array.length; i++) {
        for(let k=0; k < array.length - 1; k++) {
            if(array[k] > array[k + 1]) {
                await sleep(10);
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

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  