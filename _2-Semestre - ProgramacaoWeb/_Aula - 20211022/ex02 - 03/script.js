const urlBiblioteca = 'biblioteca.json';
const searchBook = document.querySelector('#searchBook');
const resultView = document.querySelector('.container')

fetch(urlBiblioteca)
    .then(response => response.json()).catch(() => viewError())
    .then(books => {
        viewBook(books);
});


const viewBook = (books) => {
    searchBook.addEventListener('keyup', () => {
        searchBooks(searchBook.value, books);
    })
}

const viewError = () => {
    resultView.innerHTML = `
        <div class='error'>
            <h3>Não conseguimos achar nenhum dado.</h3>
            <p>Veja a conexão com o servidor!!!</p>
        </div>
    `
}

function searchBooks(text, books) {
    for(let i=0; i < books.biblioteca.length; i++) {
        if(books.biblioteca[i].titulo.toLowerCase().indexOf(text) >= 0) {
            resultView.innerHTML = 
            `
                <figure class='capa'>
                    <img src=${books.biblioteca[i].capa} alt=${books.biblioteca[i].titulo}/>
                </figure>
                <p>${books.biblioteca[i].titulo}</p>
                <p>Autor: ${books.biblioteca[i].autor}</p>
            ` 
        }
    }
}


// const 