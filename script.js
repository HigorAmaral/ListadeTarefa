//Quando apertar enter realizar a tarefa
document.getElementById("tarefaInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        adicionarTarefa();
    }
})
//validar o item informado
function adicionarTarefa() {
    let tarefa = document.getElementById("tarefaInput").value;
    if (tarefa == '') {
        alert("Não deixe em branco.")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = tarefa;
        tarefa = document.getElementById("tarefaInput").value = ''

        //Botão de concluir
        let btnConcluir = document.createElement("button");
        btnConcluir.innerHTML = "Concluir";
        btnConcluir.onclick = function () {
            this.parentElement.remove();
            console.log(this);
            let itemConcluido = this.parentElement;
            itemConcluido.removeChild(this);
            document.getElementById("listaConcluidos").appendChild(itemConcluido);

            //Botão de excluir
            let btnExcluir = document.createElement("button");
            btnExcluir.innerHTML = "Excluir";
            btnExcluir.onclick = function () {
                this.parentElement.remove();
            };
            itemConcluido.appendChild(btnExcluir);
        };
        li.appendChild(btnConcluir);

        document.getElementById("listaTarefas").appendChild(li);
    }
}