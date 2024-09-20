const tasks = document.querySelectorAll(".tasks li");
//Definir uma variável global para armazenar temporariamente o item que está sendo arrastado.
let draggedTask = null;

// FAZER EVENTOS PARA MOSTRAR QUE AS TASKS FORAM TIRADAS DAS SUAS COLUNAS

for (let i = 0; i < tasks.length; i++) {
  // Definir a task atual e o que vai acontecer com ela.
  const task = tasks[i];

  task.addEventListener("dragstart", function (event) {
    //armazenar o item da lista que está sendo arrastado para a variavel global .
    draggedTask = task;

    //Definir o tipo de efeito permitido para o arrasto. No caso, é permitido mover o item
    event.dataTransfer.effectAllowed = "move";

    /*Armazena o conteúdo HTML do item que está sendo arrastado. 
    Isso é necessário para transferir e atualizar o conteúdo na área de destino. */
    event.dataTransfer.setData("text/html", task.innerHTML);

    //Adicionar a classe CSS dragging ao item arrastado
    task.classList.add("dragging");
  });

  // definr o que vai acontecer qd o usuário solta a tarefa
  // ele vai remover a class dragging anteriormente adicionada
  task.addEventListener("dragend", function () {
    draggedTask.classList.remove("dragging");
    draggedTask = null;
  });
}

// FAZER EVENTOS PARA MOSTRAR QUE AS TASKS MOVIDAS FORAM DEPOSITADAS EM OUTRAS COLUNAS

const columns = document.querySelectorAll(".tasks");

for (let i = 0; i < columns.length; i++) {
  const column = columns[i];

  //O trecho a seguir vai mostrar que a taks sai da coluna de origem
  column.addEventListener("dragover", function (event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    column.classList.add("dragover");
  });

  column.addEventListener("dragleave", function () {
    column.classList.remove("dragover");
  });

  //o trecho a seguir vai mostrar que a task foi recebida em outra coluna
  column.addEventListener("drop", function (event) {
    event.preventDefault();
    const task = document.createElement("li");
    task.innerHTML = event.dataTransfer.getData("text/html");
    task.setAttribute("draggable", true);
    task.addEventListener("dragstart", function (event) {
      draggedTask = task;
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/html", task.innerHTML);
      task.classList.add("dragging");
    });
    column.appendChild(task);
    column.classList.remove("dragover");

    // Remove task from previous column
    const previousColumn = draggedTask.parentNode;
    previousColumn.removeChild(draggedTask);
  });
}

//ADICIONAR UMA NOVA TAREFA 
const addTaskForm = document.querySelector("#add-task-form");
const addTaskInput = addTaskForm.querySelector("input");

addTaskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const newTaskText = addTaskInput.value.trim();
  if (newTaskText !== "") {
    const newTask = document.createElement("li");
    newTask.innerHTML = newTaskText;
    newTask.setAttribute("draggable", true);
    newTask.addEventListener("dragstart", function (event) {
      draggedTask = newTask;
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/html", newTask.innerHTML);
      newTask.classList.add("dragging");
    });
    document.querySelector("#todo").appendChild(newTask);
    addTaskInput.value = "";
  }
});