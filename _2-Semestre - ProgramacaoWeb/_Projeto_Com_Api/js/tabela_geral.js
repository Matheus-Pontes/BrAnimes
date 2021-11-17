let fundosUsuario = [];
let fundosTabela = [];

async function carregarDadosUser(url){
    await fetch(url)
            .then(resp => resp.json())
            .then(json => fundosUsuario = json);
    carregarDadosFundos();
}

async function carregarDadosFundos(){
    
    for (var FII of fundosUsuario){
        let json = await fetch(`https://api-simple-flask.herokuapp.com/api/${FII.nome}`)
                        .then(resp => resp.json());
    
        fundosTabela.push(json);  
    }

    if (fundosTabela.length > 0) {
        document.querySelector('#loading').style.display = 'none'; 
    }

    exibirTabela(fundosTabela, fundosUsuario);
}

carregarDadosUser("json/fii.json");

function exibirTabela(fundosTabela, fundosUsuario){
    let dadosDosFundosDoUsuario = [];
    let table = "";
    let somaProventos = 0;
    let somaQtdDeCotas = 0;
    let somaTotalInvestimento = 0;
    
    for(let i=0; i < fundosUsuario.length; i++) {
        dadosDosFundosDoUsuario.push(fundosTabela.find((item) => item.fundo.indexOf(fundosUsuario[i].nome.toUpperCase()) >= 0))
    }

    console.log(dadosDosFundosDoUsuario);

    for(let i=0; i < dadosDosFundosDoUsuario.length; i++){
       
        somaProventos += dadosDosFundosDoUsuario[i].pvp;
        somaQtdDeCotas += fundosUsuario[i].qtde;
        somaTotalInvestimento += fundosUsuario[i].totalgasto;

        let rendimentoFII = ((dadosDosFundosDoUsuario[i].pvp * 100) / dadosDosFundosDoUsuario[i].minMes).toFixed(2);

        let classTr = (rendimentoFII < 0.60) ? "negativo" : "positivo";

        table += `
            <tr class=${classTr}>
                <td>${dadosDosFundosDoUsuario[i].fundo}</td>
                <td>${dadosDosFundosDoUsuario[i].setor}</td>
                <td>${dadosDosFundosDoUsuario[i].proximoRendimento.dataBase === "-" ? dadosDosFundosDoUsuario[i].ultimoRendimento.dataBase : dadosDosFundosDoUsuario[i].proximoRendimento.dataBase}</td>
                <td>${dadosDosFundosDoUsuario[i].proximoRendimento.dataPag === "-" ? dadosDosFundosDoUsuario[i].ultimoRendimento.dataPag : dadosDosFundosDoUsuario[i].proximoRendimento.dataPag}</td>
                <td>R$ ${dadosDosFundosDoUsuario[i].pvp}</td>
                <td>R$ ${dadosDosFundosDoUsuario[i].minMes}</td>
                <td>${fundosUsuario[i].qtde}</td>
                <td>R$ ${fundosUsuario[i].totalgasto}</td>
                <td>R$${(fundosUsuario[i].totalgasto / fundosUsuario[i].qtde).toFixed(2)}</td>
                <td>${rendimentoFII} % </td>
                <td>${dadosDosFundosDoUsuario[i].dividendYield} % </td>
                <td>R$ ${dadosDosFundosDoUsuario[i].rendimentoMedio24M.toFixed(2)} </td>
            </tr>
        `   
        
    }

    table += `
    <tr class="trTotalGeral">
        <td colspan="4" >Total Geral</td>
        <td>R$ ${somaProventos.toFixed(2)}</td>
        <td>${somaQtdDeCotas}</td>
        <td> - </td>
        <td>R$ ${somaTotalInvestimento.toFixed(2)}</td>
        <td> - </td>
        <td> - </td>
        <td> - </td>
        <td> - </td>
    </tr>`

    document.querySelector('#tableFundos').innerHTML += table;


}