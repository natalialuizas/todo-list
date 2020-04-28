window.addEventListener('DOMContentLoaded', function () {
const form = document.querySelector('form');
const botaoCheck = document.querySelector('#todoMarcarTodos');

form.addEventListener('submit', function(e){
    e.preventDefault()

    const input = document.querySelector('#todoInput').value.trim()
    
    if(!input){
        return alert('Por favor preencher a tarefa')
    }
    return addTarefa(input), form.reset();
})

function addTarefa(input){
    const listasTarefas = document.querySelector('#todoLista');
    const tarefa = document.createElement('li');
    const paragrafo = document.createElement('p');
    const span = document.createElement('span');

    span.innerText = 'x';
    span.classList.add('todo__btn-excluir');
    paragrafo.innerText = input;

    tarefa.appendChild(paragrafo);
    tarefa.appendChild(span);
    listasTarefas.appendChild(tarefa);

    paragrafo.addEventListener('click', function(){
        paragrafo.classList.add('checked')
    })
    span.addEventListener('click', function(){
    tarefa.remove()
    })
} 
    botaoCheck.addEventListener('click', function(){
        const itens = document.querySelectorAll('p');
    })
})