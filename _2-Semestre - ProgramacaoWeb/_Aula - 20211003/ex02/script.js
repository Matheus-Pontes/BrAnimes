const rowsElement = document.querySelector('#row');
const columnElement = document.querySelector('#column');
const tableElement = document.querySelector('#table');
const divElement = document.querySelector('#tables');
const buttonElement = document.querySelector('#criarTabela');
buttonElement.addEventListener('click', () => {
    tableElement.innerHTML = "";
    createTable(rowsElement.value, columnElement.value);
    
    if(columnElement.value > 10) {
        addClass(divElement, 'scroll-x')
    }
});

const createTable = (rows, columns) => {
    
    for(let i = 1; i <= rows; i++) {

        let tr = document.createElement('tr');

        for(let j = 1; j <= columns; j++) {
            tableElement.appendChild(tr);

            let td = document.createElement('td');

            td.textContent = ` ${i},${j}`;
            tr.appendChild(td);
        }
    }

}


const addClass = (element, className) => { 
    element.classList.add(className); 
};