const http = require("http");
const port = 8080;

function moduloSistemaDeBusca() {
    return "Modulo sistema de busca";
}

function componenteCatalogoDePassagens() {
    return "Componente catalogo de passagem";
}

function microServicoApiDadosDaPassagem() {
    return "Micro servico api dados das passagens";
}

function moduloSistemaDeMilhas() {
    return "Modulo sistema de milhas";
}

function microServicoAcessaBancoDeDadosEmpresa() {
    return "Micro serviço acessa banco de dados empresa";
}

function microServicoAcessaBancoDeDadosEmpresaParceira() {
    return "Micro serviço acessa banco de dados empresa parceira";
}

function moduloSistemaDePagamento() {
    return "Modulo sistema de pagamento";
}

function microServicoSistemaDePagamentoEmpresaParceira() {
    return "Micro serviço sistema de pagamento empresa parceira"
}

function microServicoClienteInteressadosMilhasEmpresaParceira() {
    return "Micro serviço Cliente Interessados Milhas empresa parceira"
}

function iniciarSistemaDePassagens() {
    return "Iniciar sistema de compra e venda de passagens";
}

function montarExecucao() {
   return '==>'+ iniciarSistemaDePassagens() + "</br>"+
    '==> '+ moduloSistemaDeBusca() + "</br>"+
    '==> '+ componenteCatalogoDePassagens() + "</br>"+
    '==> '+ microServicoApiDadosDaPassagem() + "</br>" +
    '==> '+ moduloSistemaDeMilhas() + "</br>"+
    '==> '+ microServicoAcessaBancoDeDadosEmpresa() + "</br>" +
    '==> '+ microServicoAcessaBancoDeDadosEmpresaParceira() + "</br>" +
    '==> '+ moduloSistemaDePagamento() + "</br>" +
    '==> '+ microServicoSistemaDePagamentoEmpresaParceira() + "</br>"+
    '==> '+ microServicoClienteInteressadosMilhasEmpresaParceira() +     
    "</br>";
}

http.createServer(function(req, res) { 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(montarExecucao());
    res.end();

}).listen(port, function() {
    console.log("Iniciando sistema de vendas e compras de passagens !!!");
});

