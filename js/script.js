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

var listaTarefas = [];

const btn = document.querySelector(".btn");
const divTask = document.querySelectorAll(".text");

function adicionarTarefa(e) {
  e.preventDefault();
  let task = document.getElementById("task");
  let newTask = task.value;

  listaTarefas.push(newTask);

  task.value = "";

  mostrarTarefa();
}

function mostrarTarefa() {
  let exibirTarefas = document.querySelector(".tarefas");

  exibirTarefas.innerHTML = "";

  for (let i = 0; i < listaTarefas.length; i++) {
    let tarefa = listaTarefas[i];

    let elementoTarefa = document.createElement("div");
    elementoTarefa.innerHTML = `
    <div class="task-item">
    <i class="fa-solid fa-check-double"></i>
    <h2>${tarefa}</h2>
    <i class="excluir fa-solid fa-trash"></i>
     </div>
    `;

    for (let i = 0; i < listaTarefas.length; i++) {
      const apagarTarefa = document.querySelector(".excluir");
      apagarTarefa.addEventListener("click", excluirTarefas);
    }

    exibirTarefas.appendChild(elementoTarefa);
  }
}
mostrarTarefa();

function excluirTarefas() {
  const valor = listaTarefas.pop();
  console.log(valor);
}

// apagarTarefa.addEventListener("click", excluirTarefa);
btn.addEventListener("click", adicionarTarefa);
