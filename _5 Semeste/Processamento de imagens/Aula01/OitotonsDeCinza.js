let carro1, carro2;

let graysColors = [33, 52, 73, 108, 173, 206, 222, 233];

function preload() {
    carro1 = loadImage('carro.png');
    carro2 = loadImage('carro.png');
}

function setup() {
    createCanvas(1500, 600);
    pixelDensity(1);
    noLoop();

    carro1.resize(width / 2, 1200);
    carro2.resize(width / 2, 600);
}

function getTomDeCinza(colorBit) {
    if (colorBit < 50)
       return graysColors[0];
    else if (colorBit < 80)
       return graysColors[1];
    else if (colorBit < 90)
       return graysColors[2];
    else if(colorBit < 105)
       return graysColors[3];  
    else if(colorBit < 155)
       return graysColors[4];  
    else if(colorBit < 180)
        return graysColors[5];  
    else if(colorBit < 200)
        return graysColors[6];  
    else if(colorBit < 255)
        return graysColors[7];  
}

function draw() {

    image(carro1, 0, 0);
    
    loadPixels();
    carro1.loadPixels();
    
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let index = (x + y * width) * 4;
            
            r = carro1.pixels[index+0];
            g = carro1.pixels[index+1];
            b = carro1.pixels[index+2];
            
            let rgb = r * 0.299 + g * 0.587 + b * 0.0114;
            
            pixels[index+0] = getTomDeCinza(rgb);
            pixels[index+1] = getTomDeCinza(rgb);
            pixels[index+2] = getTomDeCinza(rgb);
        }
    }
    updatePixels();
    
    image(carro2, width / 2, 0);
}