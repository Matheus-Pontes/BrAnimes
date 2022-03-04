const tabela = document.querySelector('#tabela');
let tabelaAuxiliar = '<table>';

tabelaAuxiliar += `
    <tr style='border: 0; transform: none;'>
        <td>RGM</td>
        <td>NOME</td>
        <td>CURSO</td>
        <td>PW</td>
        <td>BD</td>
        <td>CG</td>
        <td>ED</td>
        <td>IA</td>
    </tr>
`
alunos.forEach(aluno => {
    tabelaAuxiliar += `
        <tr>
            <td>${aluno.rgm}</td>
            <td>${aluno.nome}</td>
            <td>${aluno.curso}</td> `;
            
    aluno.notas.forEach(nota => {
        tabelaAuxiliar += `
            <td>${nota.nf}</td> 
        `;
    });
});

tabelaAuxiliar += '</tr></table>'
tabela.innerHTML = tabelaAuxiliar;

