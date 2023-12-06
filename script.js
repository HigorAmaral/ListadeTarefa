// Criação dos elementos HTML
// Armazena a referencia
var input = document.createElement("input");
input.id = "tarefaInput";
document.body.appendChild(input);
// criar um botão e uma lista não ordenada (ul), e adicioná-los 
var btn = document.createElement("button");
btn.innerHTML = "Adicionar Tarefa";
btn.onclick = adicionarTarefa;
document.body.appendChild(btn);

var lista = document.createElement("ul");
lista.id = "listaTarefas";
document.body.appendChild(lista);

var listaConcluidos = document.createElement("ul");
listaConcluidos.id = "listaConcluidos";
document.body.appendChild(listaConcluidos);

// Função para adicionar tarefas
function adicionarTarefa() {
    // obtem o valor atual
    var tarefa = document.getElementById("tarefaInput").value;
    // coloca o elemento na li
    var li = document.createElement("li");
    li.innerHTML = tarefa;
    // botões de concluir e de excluir
    var btnConcluir = document.createElement("button");
    btnConcluir.innerHTML = "Concluir";
    btnConcluir.onclick = function () {
        this.parentElement.remove();
        var itemConcluido = this.parentElement;
        document.getElementById("listaConcluidos").appendChild(itemConcluido);

        var btnExcluir = document.createElement("button");
        btnExcluir.innerHTML = "Excluir";
        btnExcluir.onclick = function () {
            this.parentElement.remove();
        };
        itemConcluido.appendChild(btnExcluir);
    };
    li.appendChild(btnConcluir);

    document.getElementById("listaTarefas").appendChild(li);
}