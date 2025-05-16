function addTask() {
    console.log("Entrou dentro da função addTask");
 
    // Pegar o input
    var input = document.getElementById("input-tarefa");
   
    // Pegar valor do input
    var inputValue = input.value;
 
    //Limpar o input
    input.value = "";
 
    // Criar
    var list = document.getElementById("lista");
 
    // Criar um elemento li
    var li = document.createElement("li");
   
    // Adicionar um valor dp INPUT para LI
    //li.innerText = inputValue;
    //li.innerHTML = "Minha tarefa <button>Excluir</button>";
    //li.innerHTML = inputValue + "<button>Excluir</button>";
    li.innerHTML = `${inputValue} <button class="excluir" onclick="this.parentElement.remove()">🗑️</button>`;
 
    // Adicionar a função de marcar a tarefa como concluida
    li.onclick = function() {
        li.className = "tarefa-concluida"
    }
 
 
    // Adicionar o LI na lista de tarefas
    list.appendChild(li);
 
    console.log(input.value)
 
    alert("Tarefa adicionada com sucesso!")
 
}
 