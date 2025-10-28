let tarefas = []
let contador = 0

function adicionarTarefa() {
    const inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value.trim()
    

    const mensagem = document.getElementById("mensagem")

    if (tarefa == "") {
        let mensagemErro = "Digite uma tarefa para adicioná-la a sua lista!"
        mensagem.textContent = mensagemErro
    } else {
        let mensagemSucesso = "Tarefa adicionada com sucesso!"
        mensagem.textContent = mensagemSucesso
        tarefas.push(tarefa)
        renderizarTarefas()
        
        if(contador===0){
        const limparListas = document.getElementById("limparListas")
        let botaoLimparLista = document.createElement("button")
        botaoLimparLista.textContent =" Limpar tudo"
        botaoLimparLista.className = "botao_lista"
        botaoLimparLista.onclick = () => limparLista(limparListas,botaoLimparLista)


        limparListas.appendChild(botaoLimparLista) 
         contador--
    }
   
       
    }

 

    inputTarefa.value = ""
    
}

function renderizarTarefas() {
    const listaTarefas = document.getElementById("listaTarefas")
    listaTarefas.innerHTML = ""


    
    for (let i = 0; i < tarefas.length; i++){
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefas[i]
        let botaoRemover = document.createElement("button")
        botaoRemover.className = "remover"
        botaoRemover.textContent ="Remover🚮"
        botaoRemover.onclick = () => removerTarefa(i)
        let botaoEditar = document.createElement("button")
        
        botaoEditar.className = "editar"
        botaoEditar.textContent ="Editar✏️"
        botaoEditar.onclick = () => editarTarefa(i)

        novaTarefa.appendChild(botaoEditar)
        novaTarefa.appendChild(botaoRemover)
        listaTarefas.appendChild(novaTarefa)

    }
}

function removerTarefa(i){
    tarefas.splice(i,1)
    renderizarTarefas()

}
function  editarTarefa(i){
   let tarefaEditada = prompt("Edite a tarefa:")
   if(tarefaEditada.trim() !== ""){
    tarefas[i] = tarefaEditada
    renderizarTarefas()
   }
}
function limparLista(limparListas,botaoLimparLista){
    tarefas.length = 0
    renderizarTarefas()
    const mensagem = document.getElementById("mensagem")
    mensagem.textContent = "Lista de tarefas limpa com sucesso!"
    
    limparListas.removeChild(botaoLimparLista)
    contador ++

    
}