const minhaBiblioteca = require("./biblioteca");
const http = require("http");

http.createServer(function (req, res) { 
    res.writeHead(200, { 'Content-Type': 'text/html' }); 
    res.write("RGM: " + minhaBiblioteca.RGM + "<br>"); 
    res.write("Primeiro nome: " + minhaBiblioteca.PrimeiroNome + "<br>"); 
    res.write("Ultimo nome: " + minhaBiblioteca.UltimoNome + "<br>"); 
}).listen(8080, function() {
    console.log("Servidor na porta 8080");
});