var heights = [];
var w = 10;
var values = 50;
var arrayOrdenado = [];

async function setup() {
    createCanvas(500, 200);
    for(let i=0; i < values; i++) {
        heights[i] = Math.floor(Math.random() * (0 + 100) + 0);
    }

    await sleep(10);
    arrayOrdenado = await mergeSort(heights);
}

async function draw() {
    background(0);
    for(let i=0; i < arrayOrdenado.length; i++) {
        noStroke();
        
        rect( i * w, 200 - arrayOrdenado[i], w, arrayOrdenado[i]);
    }
}

async function mergeSort(array) {
    const middle = array.length / 2;
    
    if (array.length < 2)
        return array;
    
    const topLeft = array.splice(0, middle);
    return await merge(await mergeSort(topLeft), await mergeSort(array)) 
}

async function merge(start, end) {
    let arrayAux = [];

    while (start.length && end.length) {
        if(start[0] < end[0])
            arrayAux.push(start.shift());
        else
            arrayAux.push(end.shift());
    }
    
    return [...arrayAux, ...start, ...end];
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}