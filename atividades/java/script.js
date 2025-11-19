let idTarefa = 0;

function adicionarTarefa() {
  const input = document.getElementById("novaTarefa");
  const texto = input.value.trim();
  if (texto === "") return;

  const tarefa = document.createElement("div");
  tarefa.className = "tarefa";
  tarefa.textContent = texto;
  tarefa.setAttribute("draggable", "true");
  tarefa.setAttribute("id", "tarefa-" + idTarefa++);
  tarefa.ondragstart = arrastar;

  document.querySelector(".coluna").appendChild(tarefa);
  input.value = "";
}

function arrastar(event) {
  event.dataTransfer.setData("id", event.target.id);
}

function permitirSoltar(event) {
  event.preventDefault();
}

function soltar(event) {
  event.preventDefault();
  const id = event.dataTransfer.getData("id");
  const tarefa = document.getElementById(id);
  event.target.closest(".coluna").appendChild(tarefa);
}
