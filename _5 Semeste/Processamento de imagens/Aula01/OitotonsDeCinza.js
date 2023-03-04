let carro1, carro2;

let graysColors = [32, 64, 96, 128, 160, 192, 224, 255];

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
    if (colorBit < 32)
       return graysColors[1];
    else if (colorBit < 64)
       return graysColors[2];
    else if (colorBit < 96)
       return graysColors[3];
    else if(colorBit < 128)
       return graysColors[4];  
    else if(colorBit < 160)
       return graysColors[5];  
    else if(colorBit < 192)
        return graysColors[6];  
    else if(colorBit < 224)
        return graysColors[7];  
    else
        return graysColors[0];  
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