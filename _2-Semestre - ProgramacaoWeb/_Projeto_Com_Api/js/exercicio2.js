const url = "../json/dados.json";

let table = "<table>";
table += `
<tr class='header'>
    <td>Nome completo</td>
    <td>Gênero</td>
    <td>Idade</td>
    <td>Rua/número</td>
    <td>Cidade</td>
    <td>País</td>
</tr>
`;

async function getJson() {
    const response = await fetch(url);
    return response.json();
}

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const data = await getJson();
        const dados = data.results;

        buildTable(dados);    
        checkFemaleAndMale(dados);
    } catch(e) {
        console.log(e);
    }
    
    console.log(dados);
});

function buildTable(data) {
    const dados = data;
    dados.forEach(el => {
        table += `
        <tr>
            <td>${checkData(el.id.name, "Não tem nome")}</td>
            <td>${checkData(el.gender, "Não tem generero")}</td>
            <td>${checkData(el.dob.age, "Não tem idade")}</td>
            <td>${checkData(el.location.street.name, "Não tem idade")}, ${el.location.street.number}</td>
            <td>${checkData(el.location.street.name, "Não tem idade")}, ${el.location.street.number}</td>
            <td>${checkData(el.location.country, "Não tem país")}</td>
        </tr>
        `
    });
    table += "</table>"
    document.querySelector("#table").innerHTML = table;
}

function checkFemaleAndMale(data) {
    const dados = data;
    let soma = 0;

    let countFemale = 0;
    let countMale = 0;

    dados.forEach(el => {
        soma += el.dob.age;

        if (el.gender === "female" && el.dob.age > 40) {
            countFemale++
        } else if(el.gender === "male" && el.dob.age > 40){
            countMale++;
        }
        
    });

    document.querySelector("#estatisticas").innerHTML = `
        <span>A média das idade são ${Math.round(soma / dados.length)}</span></br>
        <span>A quantidade de mulheres com idade acima de 40 anos ${countFemale}</span></br>
        <span>A quantidade de homens com idade acima de 40 anos ${countMale}</span>
    `;
} 

function checkData(data1, txt) {
    return data1 != "" ? data1 : txt;
}