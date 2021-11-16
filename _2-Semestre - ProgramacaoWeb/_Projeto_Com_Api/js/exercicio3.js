const btnSearch = document.querySelector("#buttonSearch");
const inputSearch = document.querySelector("#txtSearch");
const informationPersos = document.querySelector("#infomationPersons");
const url = "../json/dados.json";

async function getJson() {
    const response = await fetch(url);
    const data = response.json();
    return data;
}

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const data = await getJson();
        console.log(data.results);
        
        btnSearch.addEventListener('click', () => {
            informationPersos.innerHTML = '';
            searchPerson(data, inputSearch.value);
        });
        
        inputSearch.addEventListener('keyup', () => {
            informationPersos.innerHTML = '';
            searchPerson(data, inputSearch.value);
        });

    } catch(e) {
        console.log(e);
    }
});

const searchPerson = (data, input) => {
    const dados = data.results;
    dados.forEach(dado => {
        if(dado.location.state.indexOf(input) >= 0 ) {
            buildPerson(dado);
        }
    });
}

function buildPerson(dado) {
    let checkGender = (dado.gender == 'female' ? "female" : 'male');


    let infos = `<div class=${checkGender}>`
    
    infos += `
    <figure>
        <img src=${dado.picture.medium}/>
    </figure>
        <p>${dado.id.name}</p>
        <p>${dado.location.city}</p>
        <p>${dado.location.state}</p>
        <p>${dado.location.country}</p>
        <p class="email">${dado.email}</p>
    `
    infos += '</div>'

    informationPersos.innerHTML += infos;
}