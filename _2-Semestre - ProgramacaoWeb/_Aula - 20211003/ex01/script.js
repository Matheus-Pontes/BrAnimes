const buttonElement = document.querySelector('#putName');
const nameElemet = document.querySelector('#name');
const tbody = document.querySelector('#corpoDaTabela');
const tableElement = document.querySelector('#table');

let nomes = [];

buttonElement.addEventListener('click', () => {
    tbody.innerHTML = "";
    addName(nomes);
});

const addName = (nomes) => {
    nomes.push(nameElemet.value);
    nomes.forEach((nome, index) => {
        tbody.innerHTML += `
        <tr>
            <td>${index + 1 }</td>
            <td>${nome}</td>
        </tr>
        `
    });

    if(nomes.length >= 10) {
        addClass(tableElement, 'height')
    }
    
}

const addClass = (element, className ) => { 
    element.classList.add(className); 
};