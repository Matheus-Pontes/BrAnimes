const inputRGM = document.querySelector('#rgmAluno');
const informacoesStudent = document.querySelector('#informacoesStudent');

document.querySelector('#buttonSearch').addEventListener('click', () => {
    searchRGM(inputRGM.value);
});

const searchRGM = (rgm) => {
    for(let i = 0; i < alunos.length; i++){
        alunos[i].rgm === rgm ? viewDatasStudent(rgm) : alert('Esse aluno não existe em nossa base de dados.');
        break;
    }
}

const viewDatasStudent = (rgm) => {
    let saida = '';
    for(let i=0; i < alunos.length; i++){
        if(alunos[i].rgm === rgm) {
            saida += `
                </br>                
                ID: ${alunos[i].id}</br>
                RGM: ${alunos[i].rgm}</br>
                Nome: ${alunos[i].nome}</br>
                Genêro: ${alunos[i].genero}</br>
                Curso: ${alunos[i].curso}</br>
                NOTAS: 
            `
        }
        for (let j=0; j < alunos[i].notas.length; j++) {
            saida += `
            <ul>
                <li>${alunos[i].notas[j].disciplina} = ${alunos[i].notas[j].nf} (${conceito(alunos[i].notas[j].nf)})</li>
            </ul>`;
        }
        break;
    }
    informacoesStudent.innerHTML = saida;
}
    
const conceito = (notaFinal) => {
    if(notaFinal >= 6) {
        return '<span class="blue">APROVADO</span>'
    } else if ( notaFinal < 3) {
        return '<span class="red">REPROVADO</span>'
    } else {
        return '<span class="orange">AVALIAÇÃO FINAL</span>'
    }
}