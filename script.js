var form = document.getElementById('form');
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault(); // Prevenir o envio do formulário
    adicionarLinha(); // Adiciona a linha e atualiza a tabela
});

function adicionarLinha(){
    var nome = document.getElementById('nome');
    var tel = document.getElementById('tel');

    var linha = '<tr>';
    linha += `<td> ${nome.value} </td>`;
    linha += `<td> ${tel.value} </td>`;
    linha += '</tr>';

    linhas += linha;

    var corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;} // Atualiza a tabela diretamente