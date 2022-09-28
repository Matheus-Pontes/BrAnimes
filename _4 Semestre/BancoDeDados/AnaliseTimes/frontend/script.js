const $estados = document.querySelector('#estados');
const $grafBR = document.querySelector('#brasileirao');
const $grafLB = document.querySelector('#libertadores');
const $grafCBR = document.querySelector('#mundial');
const $grafMD = document.querySelector('#copaDoBrasil');
const $grafSULA = document.querySelector('#sulamericana');
const $message = document.querySelector('.message');
const estadoSP = 25; 

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
    const times = await GetBrasileirao().then(data => data);

    let data = new google.visualization.DataTable();

    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');

    times.forEach(time => {
        data.addRows([
            [time.Nome, time.BrasileiraoQuantidade]
        ]);
    });

    let options = {
        title: 'Brasilerão',
        is3D: true
    };

    let chart = new google.visualization.PieChart($grafBR);

    chart.draw(data, options);
}

async function drawChartLiberta() {
    const times = await GetLibertadores().then(data => data);

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
    const times = await GetMundial().then(data => data);

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
    const times = await GetCopaDoBrasil().then(data => data);

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
    const times = await GetSulamericana().then(data => data);

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

async function GetBrasileirao() {
    const [ times ] = await fetch(`http://localhost:3000/brasileirao/${$estados.value}`).then(data => data.json());

    return times;
}

async function GetLibertadores() {
    const [ times ] = await fetch(`http://localhost:3000/libertadores/${$estados.value}`).then(data => data.json());

    return times;
}

async function GetMundial() {
    const [ times ] = await fetch(`http://localhost:3000/mundial/${$estados.value}`).then(data => data.json());

    return times;
}

async function GetCopaDoBrasil() {
    const [ times ] = await fetch(`http://localhost:3000/copadobrasil/${$estados.value}`).then(data => data.json());

    return times;
}

async function GetSulamericana() {
    const [ times ] = await fetch(`http://localhost:3000/sulamericana/${$estados.value}`).then(data => data.json());

    return times;
}

function showGrafs(deuErro) {
    if (deuErro) {
        $message.style.display = 'block';
        $grafBR.style.display = 'none';
        $grafLB.style.display = 'none';
        $grafMD.style.display = 'none';
        $grafCBR.style.display = 'none';
        $grafSULA.style.display = 'none';
    }
    else{
        $message.style.display = 'none';
        $grafBR.style.display = 'block';
        $grafLB.style.display = 'block';
        $grafMD.style.display = 'block';
        $grafCBR.style.display = 'block';
        $grafSULA.style.display = 'block';
    }
}

async function GetEstados() {
    const [ estados ] = await fetch('http://localhost:3000/estados').then(data => data.json()).catch(err => { 
        showGrafs(err.message);
    });

    estados.forEach(estado => {
        $estados.innerHTML += `
            <option value="${estado.EstadoId}">${estado.Descricao}</option>
        `;
    });

    
    valoresIniciais();
}

GetEstados();