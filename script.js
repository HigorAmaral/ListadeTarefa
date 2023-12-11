//validar o item informado
function adicionarTarefa() {
    // Obtem o valor da id tarefaInput
    let tarefa = document.getElementById("tarefaInput").value;
    // verificando se está vazia
    if (tarefa == '') {
        alert("Não deixe em branco.")
    }
    else {
        // Cria um novo elemento <li> e adiciona o conteúdo do input a ele
        let li = document.createElement("li");
        //  li amazena a variavel e defini como um item
        li.innerHTML = tarefa;
        // defini o campo de escreve como vazio ai deixaria vazia
        tarefa = document.getElementById("tarefaInput").value = ''

        //Botão de concluir
        let btnConcluir = document.createElement("button");
        btnConcluir.innerHTML = "Concluir";
        // Remove o item da lista de tarefas pendentes e move para a lista de concluídas
        btnConcluir.onclick = function () {
            // quando clicar ele remove o botão
            this.parentElement.remove();
            // informações sobre o elemento
            console.log(this);
            // cria uma variavel e amazena
            let itemConcluido = this.parentElement;
            // remove o botão
            itemConcluido.removeChild(this);
            // coloca como afiliado do itemConcluido
            document.getElementById("listaConcluidos").appendChild(itemConcluido);

            //Botão de excluir
            // cria um botão
            let btnExcluir = document.createElement("button");
            // defini como excluir
            btnExcluir.innerHTML = "Excluir";
            // função de remover
            btnExcluir.onclick = function () {
                this.parentElement.remove();
            };
            itemConcluido.appendChild(btnExcluir);
        };
        li.appendChild(btnConcluir);
        // Adiciona o item à lista de tarefas pendentes
        document.getElementById("listaTarefas").appendChild(li);
    }
}