let alturaDegrau = Number(window.prompt('Informe a altura dos degraus em metros [m]: '));
let alturaQueDesejaAtingir = Number(window.prompt('Informe a altura que deseja atingir em metros [m]: '));

let calculando = alturaQueDesejaAtingir / alturaDegrau

console.log('Deverá ter ' + calculando.toFixed(2) + 'degraus.');
console.log();