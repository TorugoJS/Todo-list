setInterval(() => {
  function viewHours() {
    const data = new Date();

    let hours = data.getHours();
    let minutes = data.getMinutes();
    let seconds = data.getSeconds();
    let day = data.getDate();
    let month = data.getMonth() + 1;

    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
    const hoursHTML = document.querySelector(".hours");
    const dateHTML = document.querySelector(".date");

    hoursHTML.innerText = hours + ":" + minutes + ":" + seconds;
    dateHTML.innerText = day + "/" + 0 + month + "/" + 2023;
  }
  viewHours();
}, 1000);

//task

const btn = document.querySelector(".btn");
const container = document.querySelector(".tarefas");
const deletar = document.querySelector("excluir");
const tarefaDiv = document.querySelectorAll(".tarefas div");
console.log(tarefaDiv);

var listaTarefas = [];

function adicionarTarefa(e) {
  e.preventDefault();
  let tarefaInput = document.getElementById("task");
  let novaTarefa = task.value;

  listaTarefas.push(novaTarefa);

  tarefaInput.value = "";

  mostrarTarefa();
}

function mostrarTarefa() {
  let exibirTarefas = "";

  // exibirTarefas.innerHTML = "";

  listaTarefas.forEach((tarefa, posicao) => {
    exibirTarefas =
      exibirTarefas +
      `
    <div>
    <i class="concluir fa-solid fa-check-double" onclick="tarefaConcluida(${posicao})"></i>
    <h2>${tarefa}</h2>
    <i class="excluir fa-solid fa-trash" onclick="deletarItem(${posicao})"></i>
     </div>
    `;
  });
  container.innerHTML = exibirTarefas;
}
mostrarTarefa();

function deletarItem(posicao) {
  console.log(posicao);
  listaTarefas.splice(posicao, 1);

  mostrarTarefa();
}

function tarefaConcluida() {
  tarefaDiv.classList.add("ativo");
}

btn.addEventListener("click", adicionarTarefa);
