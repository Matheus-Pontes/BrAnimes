const $estados = document.querySelector('#estados');
const $grafBR = document.querySelector('#brasileirao');
const $grafLB = document.querySelector('#libertadores');
const $grafCBR = document.querySelector('#copaDoBrasil');
const $grafMD = document.querySelector('#mundial'); 
const $grafSULA = document.querySelector('#sulamericana');
const $message = document.querySelector('.message');
const estadoSP = 25; 
const API = 'http://localhost:3000/';
let temConexaoComServidor = false;

async function GetEstados() {
    const [ estados ] = await fetch(`${API}${'estados'}`).then(data => data.json()).catch(err => { 
        showGrafsOrMessage(false);
    });

    estados.forEach(estado => {
        $estados.innerHTML += `
            <option value="${estado.EstadoId}">${estado.Descricao}</option>
        `;
    });
    
    valoresIniciais();
}

async function VerifyConection() {
    const response = await fetch(API).then(res => res.json());
    temConexaoComServidor = response.conexaoFeita;
    
    if(temConexaoComServidor) {
        showGrafsOrMessage(temConexaoComServidor);
        
        setTimeout(() => {
            GetEstados();
        }, 2000);
    }
    else {
        showGrafsOrMessage(temConexaoComServidor);
    }
}

setInterval(() => {
    VerifyConection();
}, 5000);


google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChartBR);
google.charts.setOnLoadCallback(drawChartLiberta);
google.charts.setOnLoadCallback(drawChartMundial);
google.charts.setOnLoadCallback(drawChartCopaDoBrasil);
google.charts.setOnLoadCallback(drawChartSulamericana);

function valoresIniciais() {
    $message.style.display = 'none';
    $estados.value = estadoSP;
}

async function drawChartBR() {
    const times = await GetTimesTitulos().then(data => data);
    
    let dataBR = new google.visualization.DataTable();

    dataBR.addColumn('string', 'Topping');
    dataBR.addColumn('number', 'Slices');

    times.forEach(time => {
        dataBR.addRows([
            [time.Nome, time.BrasileiraoQuantidade]
        ]);
    });
    
    let options = { title: 'Brasilerão', is3D: true };

    let chartBR = new google.visualization.PieChart($grafBR);

    chartBR.draw(dataBR, options);
}

async function drawChartLiberta() {
    const times = await GetTimesTitulos().then(data => data);

    let data = new google.visualization.DataTable();

    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');

    times.forEach(time => {
        data.addRows([
            [time.Nome, time.LibertadoresQuantidade]
        ]);
    });

    let options = {
        title: 'Libertadores',
        is3D: true
    };

    let chart = new google.visualization.PieChart($grafLB);

    chart.draw(data, options);
}

async function drawChartMundial() {
    const times = await GetTimesTitulos().then(data => data);

    let data = new google.visualization.DataTable();

    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');

    times.forEach(time => {
        data.addRows([
            [time.Nome, time.MundialQuantidade]
        ]);
    });

    let options = {
        title: 'Mundial',
        is3D: true
    };

    let chart = new google.visualization.PieChart($grafMD);

    chart.draw(data, options);
}

async function drawChartCopaDoBrasil() {
    const times = await GetTimesTitulos().then(data => data);

    let data = new google.visualization.DataTable();

    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');

    times.forEach(time => {
        data.addRows([
            [time.Nome, time.CopaDoBrasilQuantidade]
        ]);
    });

    let options = {
        title: 'Copa do brasil',
        is3D: true
    };

    let chart = new google.visualization.PieChart($grafCBR);

    chart.draw(data, options);
}

async function drawChartSulamericana() {
    const times = await GetTimesTitulos().then(data => data);

    let data = new google.visualization.DataTable();

    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');

    times.forEach(time => {
        data.addRows([
            [time.Nome, time.SulamericanaQuantidade]
        ]);
    });

    let options = {
        title: 'Sulamericana',
        is3D: true
    };

    let chart = new google.visualization.PieChart($grafSULA);

    chart.draw(data, options);
}

$estados.addEventListener('change', function() {
    drawChartBR();
    drawChartLiberta();
    drawChartMundial();
    drawChartCopaDoBrasil();
    drawChartSulamericana();
});

function showGrafsOrMessage(conexaoFeita) {
    if (conexaoFeita) {
        $message.style.backgroundColor = "#2b934e";
        $message.innerHTML = "<h2>Conexão feita com sucesso!!!</h2>";
        $message.style.borderColor = "rgb(33 126 56)";
        setTimeout(() => {
            $message.style.display = "none";
        }, 2000);
        $grafBR.style.display = 'block';
        $grafLB.style.display = 'block';
        $grafMD.style.display = 'block';
        $grafCBR.style.display = 'block';
        $grafSULA.style.display = 'block';
    }
    else{
        $message.style.display = 'block';
        $message.style.backgroundColor = "#ee2b2b";
        $message.innerHTML = "<h2>Verifique conexão com o servidor !!! </h2>";
        $message.style.borderColor = "red";
        $grafBR.style.display = 'none';
        $grafLB.style.display = 'none';
        $grafMD.style.display = 'none';
        $grafCBR.style.display = 'none';
        $grafSULA.style.display = 'none';
    }
}

async function GetTimesTitulos() {
    const [ times ] = await fetch(`${API}${'timesTitulos/'}${$estados.value}`).then(data => data.json());

    return times;
}

