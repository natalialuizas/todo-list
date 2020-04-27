const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault()

    const input = document.querySelector('#todoInput').value.trim()
    
    if(!input){
        return alert('Por favor preencher a tarefa')
    }
    return addTarefa(input)
})

function addTarefa(input){

}