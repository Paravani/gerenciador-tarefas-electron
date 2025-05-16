function addTask() {
    const input = document.getElementById('input-tarefa');
    const taskText = input.value.trim();
    
    if (taskText === '') {
        alert('Por favor, digite uma tarefa válida!');
        return;
    }
    
    const lista = document.getElementById('lista');
    
    // Criar elemento li
    const li = document.createElement('li');
    
    // Adicionar texto da tarefa
    const span = document.createElement('span');
    span.textContent = taskText;
    li.appendChild(span);
    
    // Criar botão de deletar
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Deletar';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function() {
        li.remove();
        checkEmptyList();
    };
    
    li.appendChild(deleteBtn);
    lista.appendChild(li);
    
    // Limpar input
    input.value = '';
    
    // Verificar se a lista está vazia para atualizar o estado
    checkEmptyList();
}

function checkEmptyList() {
    const lista = document.getElementById('lista');
    const emptyState = document.querySelector('.empty-state');
    
    if (lista.children.length === 0) {
        if (!emptyState) {
            const emptyMsg = document.createElement('p');
            emptyMsg.className = 'empty-state';
            emptyMsg.textContent = 'Nenhuma tarefa foi encontrada.';
            lista.appendChild(emptyMsg);
        }
    } else if (emptyState) {
        emptyState.remove();
    }
}

// Verificar estado vazio ao carregar a página
document.addEventListener('DOMContentLoaded', checkEmptyList);