let carro2;
let contadorClicks = 0;

function preload() {
  carro2 = loadImage("carro2.png");
}

function setup() {
  createCanvas(carro2.width, carro2.height);
  pixelDensity(1);
  noLoop();
}

function draw() {
  image(carro2, 0, 0);
}

let tonsCinza = [
  {
    tom: function tomVermelho() {
      loadPixels();
      carro2.loadPixels();

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          let index = (x + y * width) * 4;

          let r = carro2.pixels[index + 0] * 0.299;

          pixels[index] = r;
          pixels[index + 1] = r;
          pixels[index + 2] = r;
        }
      }
      updatePixels();
    },
    descricao: "Vermelho",
  },
  {
    tom: function tomVerde() {
      loadPixels();
      carro2.loadPixels();

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          let index = (x + y * width) * 4;

          let g = carro2.pixels[index + 1] * 0.587;

          pixels[index] = g;
          pixels[index + 1] = g;
          pixels[index + 2] = g;
        }
      }
      updatePixels();
    },
    descricao: "Verde",
  },
  {
    tom: function tomAzul() {
      loadPixels();
      carro2.loadPixels();

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          let index = (x + y * width) * 4;

          let b = carro2.pixels[index + 0] * 0.114;

          pixels[index] = b;
          pixels[index + 1] = b;
          pixels[index + 2] = b;
        }
      }
      updatePixels();
    },
    descricao: "Azul",
  },
];

function mousePressed() {
  contadorClicks++;
  if (contadorClicks == 3) 
    contadorClicks = 0;
  tonsCinza[contadorClicks].tom();
  document.querySelector('#tom').innerHTML = tonsCinza[contadorClicks].descricao;
}
