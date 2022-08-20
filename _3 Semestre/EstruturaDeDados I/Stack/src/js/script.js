const $stackBody = document.querySelector('.stack-body');
const $stackChildren = '<div class="stack-children"></div>';
const $stackState = document.querySelector('#stackState');
const $btnInsert = document.querySelector('#btnInsert');
const $btnRemove = document.querySelector('#btnRemove');

const stack = new Stack();

function lockOrUnlockButton(isLock, $button) {
    isLock ? $button.classList.add('readonly') : $button.classList.remove('readonly');
}

const stackState = {
    'empty': { text: 'Vazia', color: '#04E762'},
    'full': { text: 'Cheia', color: '#F21919'},
    'haveSpace': { text: 'Tem espaço...', color: '#2667FF'},
    setState(element, state) {
        element.innerHTML = stackState[state].text;
        element.style.color = stackState[state].color;
    }, 
    verifyState(isFull) {
        if(isFull) {
            stackState.setState($stackState, 'full'); 
            lockOrUnlockButton(true, $btnInsert);
        }
    }
};

stackState.setState($stackState, 'empty');

$btnInsert.addEventListener('click', () => {
    stackState.setState($stackState, 'haveSpace');
    let isFull = stack.push($stackBody, $stackChildren);
    stackState.verifyState(isFull);
});

$btnRemove.addEventListener('click', () => {
    let $stackChildrens = document.querySelectorAll('.stack-body .stack-children');

    stack.pop($stackBody, $stackChildrens);

    if($stackChildrens.length == 1) {
        stackState.setState($stackState, 'empty');
    } else {
        lockOrUnlockButton(false, $btnInsert);
        stackState.setState($stackState, 'haveSpace');
    }
});