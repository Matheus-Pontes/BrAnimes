let listaDeTarefas = document.querySelector("#lista");
let tarefas;

if (localStorage.getItem("toDos") != null){
    tarefas = JSON.parse(localStorage.getItem("toDos"));
    exibirTarefas();

} else{
    tarefas = [];
}

document.querySelector("#btn").addEventListener("click", function(){
    add();
});

document.querySelector("#tarefa").addEventListener("keypress", function(e){
    if (e.key == "Enter"){
        add();
    }
})

document.querySelector("#tarefa").focus();

function add() {    
    let entrada = document.querySelector('#tarefa').value;

    if (entrada === "") {
        // fazer modal de alerta
        alert('Digite uma tarefa');
    }
    else {
        let id = (tarefas[0] != null) ? tarefas[0].id + 1 : 1;
        tarefas.unshift({ id: id, status: 1, titulo: entrada});
        localStorage.setItem("toDos", JSON.stringify(tarefas));
    }

    document.querySelector('#tarefa').value = "";
    document.querySelector('#tarefa').focus();

    exibirTarefas();
}

function exibirTarefas(){
    listaDeTarefas.innerHTML = " ";
    for(let tarefa of tarefas) {
        let classCheck = (tarefa.status == 1) ? 'check' : 'done';
        let classSpan = (tarefa.status == 1) ? '' : 'done-span';
        listaDeTarefas.innerHTML += `
            <li data-id="${tarefa.id}">
                <i class='fas fa-minus-circle close'></i>
                <i class='fas fa-check-circle ${classCheck}'></i>
                
                <span class='${classSpan}'>${tarefa.titulo}</span>
            </li>
        ` 
    }
    
    updateCloseButton();
    updateCheckButton();

    console.log(tarefas);
}

function updateCloseButton(){
    let buttonsCloses = document.querySelectorAll('.close');
    buttonsCloses.forEach(buttonClose => {
        buttonClose.addEventListener('click', e => {
            let id = Number(e.target.parentElement.getAttribute('data-id'));
            let index = tarefas.findIndex(item => item.id == id);
            tarefas.splice(index, 1);
            localStorage.setItem('toDos', JSON.stringify(tarefas));

            exibirTarefas();
        });
    })
}

function updateCheckButton(){
    let itemsLi = document.querySelectorAll('li span');

    itemsLi.forEach(item => {
        
        item.addEventListener('click', e => {
            let id = Number(e.target.parentElement.getAttribute("data-id"));
            let index = tarefas.findIndex(i => i.id == id);
            let tarefaChecked = tarefas.find(i => i.id == id);
            tarefas.splice(index, 1);
            tarefaChecked.status = 0;
            tarefas.push(tarefaChecked);
            localStorage.setItem('toDos', JSON.stringify(tarefas));
            exibirTarefas();
        });
    });
    
}
