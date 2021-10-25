"use strict";

const conceito = {
    A: 'A', B: 'B', C: 'C', D: 'D', E: 'E'
};

const validaConceitos = (media) => {
    let c;
    media.forEach(element => {
        if(element >= 8) {
            c = conceito.A;
        } else if (element >= 6 && element < 8) {
            c = conceito.B;
        } else if (element >= 5 && element < 6) {
            c = conceito.C;
        } else {
            c = conceito.D;
        }
    });

    return c;
};

let nomes = [];
let rgm = [];
let media = [];

function setElementsLocalStorage(campo, dados) {
    localStorage.setItem(campo, dados);
}

function getElementsLocalStorage() {

    let dados = {
        Nome: localStorage.getItem('Nome').split(','),
        RGM: localStorage.getItem('RGM').split(','),
        Media: localStorage.getItem('Media').split(','),
    }

    return dados;
}

function cadastrar() {
    
    nomes.push($("#nome").val());
    rgm.push($("#rgm").val());
    media.push($("#media").val());

    setElementsLocalStorage('Nome', nomes);
    setElementsLocalStorage('RGM', rgm);
    setElementsLocalStorage('Media', media);

    limpaCampos();
};



const exibir = () => {
    let { Nome, RGM, Media } = getElementsLocalStorage();
    
    const tbody = document.querySelector('#exibindoDados');
    
    let tdConceito;

    for(let i=0; i < Nome.length; i++) {
        tdConceito = validaConceitos(Media);
        
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
