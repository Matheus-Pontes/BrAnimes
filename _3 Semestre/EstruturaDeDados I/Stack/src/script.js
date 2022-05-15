const MAX = 10;

const stackState = {
    0: { text: 'Vazia', color: '#04E762'},
    1: { text: 'Cheia', color: '#F21919'},
    2: { text: 'Tem espaço...', color: '#2667FF'},
    setState(element, state) {
        element.innerHTML = stackState[state].text;
        element.style.color = stackState[state].color;
    }, 
};

const $stackBody = document.querySelector('.stack-body');
const $stackChildren = '<div class="stack-children"></div>';
const $stackState = document.querySelector('#stackState');
const $btnInsert = document.querySelector('#btnInsert');
const $btnRemove = document.querySelector('#btnRemove');

stackState.setState($stackState, 0);

$btnInsert.addEventListener('click', () => {

    if($stackBody.childNodes.length < MAX) {
        stackState.setState($stackState, 2);
        $stackBody.innerHTML += $stackChildren;
    }
    else {
        $btnInsert.classList.add('readonly');
        stackState.setState($stackState, 1);
    }
});

$btnRemove.addEventListener('click', () => {
    let $stackChildrens = document.querySelectorAll('.stack-body .stack-children');

    $stackBody.removeChild($stackChildrens[$stackChildrens.length - 1]);

    if($stackChildrens.length == 1) {
        stackState.setState($stackState, 0);
    } else {
        $btnInsert.classList.remove('readonly');
        stackState.setState($stackState, 2);
    }
});