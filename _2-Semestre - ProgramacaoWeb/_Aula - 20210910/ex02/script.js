document.querySelector('#nome')
    .addEventListener('keyup', function() {
        document.querySelector('.res')
            .innerHTML = document.querySelector('#nome').value;
    }); 