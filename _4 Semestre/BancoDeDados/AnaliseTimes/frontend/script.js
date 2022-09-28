const $estados = document.querySelector('#estados');

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChartBrasileirao);

async function drawChartBrasileirao() {

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

async function GetEstados() {
    const [ estados ] = await fetch('http://localhost:3000/estados').then(data => data.json());

    estados.forEach(estado => {
        $estados.innerHTML += `
            <option value="${estado.EstadoId}">${estado.Descricao}</option>
        `;
    })
}

$estados.addEventListener('change', function() {
    drawChartBrasileirao();
});

async function GetBrasileirao() {
    const [ times ] = await fetch(`http://localhost:3000/brasileirao/${document.getElementById('estados').value}`).then(data => data.json());
    
    return times;
}

GetEstados();
