function tarefas() {
  // Entradas do Usuario
  let inserirLista = document.getElementById("inserirLista");
  let tarefa = inserirLista.value;

  // Criando a lista
  let tarefaAdicionada = document.getElementById("ListaTarefa");
  let ListaTarefa = document.createElement("li");

  let mensagem = document.getElementById("mensagem");
  let texto ="";
  if (inserirLista.value.trim() === "") {
    texto = "Nada digitado!";
    mensagem.textContent = texto;
    mensagem.textContent.style.color("#a34743") = mensagem.textContent;
  } else{
    ListaTarefa.textContent = tarefa;
    ListaTarefa.className = "Lista";
    tarefaAdicionada.appendChild(ListaTarefa);
    texto = "Tarefa adicionada com sucesso!";
    mensagem.textContent = texto;
  }
  inserirLista.value = "";
}
