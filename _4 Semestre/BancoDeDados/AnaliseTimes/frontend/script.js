const $estados = document.querySelector('#estados');

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChartBR);
google.charts.setOnLoadCallback(drawChartLiberta);
google.charts.setOnLoadCallback(drawChartMundial);
google.charts.setOnLoadCallback(drawChartCopaDoBrasil);
google.charts.setOnLoadCallback(drawChartSulamericana);

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

    let chart = new google.visualization.PieChart(document.getElementById('brasileirao'));

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

    let chart = new google.visualization.PieChart(document.getElementById('libertadores'));

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

    let chart = new google.visualization.PieChart(document.getElementById('mundial'));

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

    let chart = new google.visualization.PieChart(document.getElementById('copaDoBrasil'));

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

    let chart = new google.visualization.PieChart(document.getElementById('sulamericana'));

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
    const [ times ] = await fetch(`http://localhost:3000/brasileirao/${document.getElementById('estados').value}`).then(data => data.json());

    return times;
}

async function GetLibertadores() {
    const [ times ] = await fetch(`http://localhost:3000/libertadores/${document.getElementById('estados').value}`).then(data => data.json());

    return times;
}

async function GetMundial() {
    const [ times ] = await fetch(`http://localhost:3000/mundial/${document.getElementById('estados').value}`).then(data => data.json());

    return times;
}

async function GetCopaDoBrasil() {
    const [ times ] = await fetch(`http://localhost:3000/copadobrasil/${document.getElementById('estados').value}`).then(data => data.json());

    return times;
}

async function GetSulamericana() {
    const [ times ] = await fetch(`http://localhost:3000/sulamericana/${document.getElementById('estados').value}`).then(data => data.json());

    return times;
}

async function GetEstados() {
    const [ estados ] = await fetch('http://localhost:3000/estados').then(data => data.json());

    estados.forEach(estado => {
        $estados.innerHTML += `
            <option value="${estado.EstadoId}">${estado.Descricao}</option>
        `;
    })
}

GetEstados();
