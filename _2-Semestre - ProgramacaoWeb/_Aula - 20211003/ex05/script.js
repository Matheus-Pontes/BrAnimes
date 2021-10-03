const calculaTabuada = document.querySelector('#calculaTabuada');
const abaTabuada = document.querySelector('.abaTabuada');
const numberTabuada = document.querySelector('#numberTabuada');
const resultadoTabuada = document.querySelector('.res');
const abaSlideShow = document.querySelector('.abaSlideShow');
const abaCronometro = document.querySelector('.abaCronometro');

const figuresElement = document.querySelector('.figures');

const imagens = {
    imagem1: '<img src="https://source.unsplash.com/random?id=08" />',
    imagem2: '<img src="https://source.unsplash.com/random?id=09" />', 
}

document.querySelector('#abaCronometro').addEventListener('click', () => {
    functions.time = 0;
    functions.changeAba(abaCronometro, abaTabuada, abaSlideShow);
    functions.timer();    
});

document.querySelector('#abaSlideShow').addEventListener('click', () => {
    functions.changeAba(abaSlideShow, abaCronometro, abaTabuada);
})

document.querySelector('#abaTabuada').addEventListener('click', () => {
    functions.changeAba(abaTabuada, abaCronometro, abaSlideShow);
});

calculaTabuada.addEventListener('click' , () => {
    functions.tabuada(numberTabuada.value);
});

document.querySelector('#buttonAfter').addEventListener('click', () => {
    functions.slideShow(imagens.imagem2); 
});

document.querySelector('#buttonBefore').addEventListener('click', () => {
    functions.slideShow(imagens.imagem1);
});

const functions = {
    time: 0,

    changeAba(abaOpen, abaClose1, abaClose2) {
        abaClose1.classList.add('close');
        abaClose1.classList.remove('open');
        abaClose2.classList.remove('open');
        abaClose2.classList.add('close');
        abaOpen.classList.add('open');
    },

    tabuada(number) {
        resultadoTabuada.innerHTML = '';

        for(let i=0; i <= 10; i++) {
            resultadoTabuada.innerHTML += `
                <span>${number} x  ${i} = ${Number(number) * i} </span></br>
            `
        }
    },

    timer() {
        document.querySelector('#timer').innerHTML = 0;
       
        setInterval(()=> {
            functions.time++;
            document.querySelector('#timer').innerHTML = functions.time;
        }, 1000);
    },

    slideShow(imagem) {
        figuresElement.innerHTML = imagem;
    }
}