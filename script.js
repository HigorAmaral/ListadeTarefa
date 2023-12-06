function adicionarTarefa() {
    var tarefa = document.getElementById("tarefaInput").value;
    var li = document.createElement("li");
    li.innerHTML = tarefa;

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