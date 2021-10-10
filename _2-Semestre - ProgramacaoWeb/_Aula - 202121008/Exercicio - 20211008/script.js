"use strict";

const conceito = {
    A: 'A', B: 'B', C: 'C', D: 'D', E: 'E'
};

let nomes = [];
let rgm = [];
let media = [];

function cadastrar() {
    
    nomes.push($("#nome").val());
    rgm.push($("#rgm").val());
    media.push($("#media").val());

    setElementsLocalStorage('Nome', nomes);
    setElementsLocalStorage('RGM', rgm);
    setElementsLocalStorage('Media', media);

    limpaCampos();
};

function setElementsLocalStorage(campo, dados) {
    localStorage.setItem(campo, dados);
}

function getElementsLocalStorage() {

    let objeto = {
        Nome: localStorage.getItem('Nome').split(','),
        RGM: localStorage.getItem('RGM').split(','),
        Media: localStorage.getItem('Media').split(','),
    }

    return objeto;
}

const exibir = () => {
    let { Nome, RGM, Media } = getElementsLocalStorage();
    
    const tbody = document.querySelector('#exibindoDados');
    
    let tdConceito;

    for(let i=0; i < Nome.length; i++) {
        if(Media[i] >= 8) {
            tdConceito = conceito.A;
        } else if (Media[i] >= 6 && Media[i] < 8) {
            tdConceito = conceito.B;
        } else if (Media[i] >= 5 && Media[i] < 6) {
            tdConceito = conceito.C;
        } else {
            tdConceito = conceito.D;
        }
        
        if(tbody) {
            tbody.innerHTML += ` 
                <tr>
                    <td>${Nome[i]}</td>
                    <td>${RGM[i]}</td>
                    <td>${Media[i]}</td>
                    <td>${tdConceito}</td>
                </tr>
            `;  
        } 
    }
};

const limpaCampos = () => {
    let array = document.getElementsByTagName('input');

    for (let i=0; i < array.length; i++) {
        array[i].value = "";
    }

}

$("#cadastrar").click(cadastrar);
$("#exibir").click(exibir);
