//date
const hours = document.querySelector(".hours");
const date = document.querySelector(".date");

//task
const task = document.getElementById("task");
const btn = document.querySelector(".btn");

function viewBtn(e) {
  e.preventDefault();
  console.log(task.value);
}

btn.addEventListener("click", viewBtn);
