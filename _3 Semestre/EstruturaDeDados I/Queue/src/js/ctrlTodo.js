const $txtTask = document.querySelector("#txtTask");
const $btnInsert = document.querySelector("#btnInsert");
const $listTasks = document.querySelector("#listTasks");

{
    // Template HTML da task
    `
    <div class="task">
        <span>${$txtTask.value}</span>
        <button id="btnFinish"><i class="fa fa-minus-circle"></i></button>
    </div>
    `
}


const fila = new Queue($listTasks);
// console.log(fila.)