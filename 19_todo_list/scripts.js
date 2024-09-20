//SELEÇÃO DE ELEMENTOS
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
const searchInput = document.querySelector("#search-input");
const eraseBtn = document.querySelector("#erase-button");
const filterBtn = document.querySelector("#filter-select");

let oldInputValue;

//FUNÇÕES

//1- Função para adicionar tarefa e criação de botões
const saveTodo = (text) => {
  const todo = document.createElement("div");
  todo.classList.add("todo");
  const todoTitle = document.createElement("h3");
  todoTitle.innerText = text;
  todo.appendChild(todoTitle);

  const doneBtn = document.createElement("button");
  doneBtn.classList.add("finish-todo");
  doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
  todo.appendChild(doneBtn);

  const edidBtn = document.createElement("button");
  edidBtn.classList.add("edit-todo");
  edidBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
  todo.appendChild(edidBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("remove-todo");
  deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  todo.appendChild(deleteBtn);

  todoList.appendChild(todo);
  todoInput.value = "";
  todoInput.focus();
};

//2 Função para esconder um formulário e mostrar outro
const toggleForms = () => {
  editForm.classList.toggle("hide");
  todoForm.classList.toggle("hide");
  todoList.classList.toggle("hide");
};

/*3 Função  para percorrer todas as tarefas (elementos com a classe .todo) 
em busca de uma cujo título (<h3>) corresponda ao valor armazenado em oldInputValue. 
Quando encontra essa tarefa, ela substitui o título antigo pelo novo valor fornecido no argumento text.*/
const updateTodo = (text) => {
  const todos = document.querySelectorAll(".todo");

  todos.forEach((todo) => {
    let todoTitle = todo.querySelector("h3");

    if (todoTitle.innerText === oldInputValue) {
      todoTitle.innerText = text;
    }
  });
};

//4 FUnção para pesquisar tarefas//

const getSeachrTodos = (search) => {
  const todos = document.querySelectorAll(".todo");

  todos.forEach((todo) => {
    let todoTitle = todo.querySelector("h3").innerText.toLowerCase();

    const normalizedSearch = search.toLowerCase();

    todo.style.display = "flex";

    if (!todoTitle.includes(normalizedSearch)) {
      todo.style.display = "none";
    }
  });
};

/*5 FUnção para exibir somente as tarefas que tem a classe que o
usuário escolher como filtro na página*/

const filterTodos = (filterValue)=>{
  const todos = document.querySelectorAll(".todo");

switch (filterValue) {
  case "all":
    todos.forEach((todo) => (todo.style.display = "flex"));

    break;

  case "done":
    todos.forEach((todo) =>
      todo.classList.contains("done")
        ? (todo.style.display = "flex")
        : (todo.style.display = "none")
    );

    break;

  case "todo":
    todos.forEach((todo) =>
      !todo.classList.contains("done")
        ? (todo.style.display = "flex")
        : (todo.style.display = "none")
    );

    break;

  default:
    break;
}
};

  //--------------------------------EVENTOS------------------------------//

//1- Esse evento chama a função que vai adiconar a tarefa qd o usuário aperta no botão de +
todoForm.addEventListener("submit", (e) => {
  //o PreventDefault evita que o formulário seja enviado para o backend
  e.preventDefault();
  const inputValue = todoInput.value;

  //Garantir que o usuário não crie tarefas sem título
  if (inputValue) {
    saveTodo(inputValue);
  }
});

//2 Evento de disparar a ação de completar/descompletar, exluir e editar tarefas.

document.addEventListener("click", (e) => {
  //o target vai fazer com que o evento seja disparado quando o elemento for clicado.
  const targetEl = e.target;
  const parentEl = targetEl.closest("div");
  let todoTitle;

  if (parentEl && parentEl.querySelector("h3")) {
    todoTitle = parentEl.querySelector("h3").innerHTML;
  }

  //Completar e descompletar tarefa
  if (targetEl.classList.contains("finish-todo")) {
    parentEl.classList.toggle("done");
  }

  //Excluir tarefa
  if (targetEl.classList.contains("remove-todo")) {
    parentEl.remove();
  }

  //Editar tarefa
  if (targetEl.classList.contains("edit-todo")) {
    toggleForms();
    editInput.value = todoTitle;
    oldInputValue = todoTitle;
  }
});

//3 Evento de cancelar a edição
cancelEditBtn.addEventListener("click", (e) => {
  e.preventDefault();
  toggleForms();
});

/*4 Evento para pegar o novo texto que o usuário inseriu e verificar
se o usuário digitou algo. Depois vai atualizar a tarefa se houver texto.*/
editForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const editInputValue = editInput.value;

  if (editInputValue) {
    updateTodo(editInputValue);
  }
  toggleForms();
});

//5 Evento de busca
searchInput.addEventListener("keyup", (e) => {
  const search = e.target.value;

  getSeachrTodos(search);
});

/*6 Evento para cancelar a busca e voltar a mostrar as tarefas que estavam 
exibidas anates da busca*/
eraseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  searchInput.value = "";
  searchInput.dispatchEvent(new Event("keyup"));
});

//7 Evento de que o usuário mexeu no filtro
filterBtn.addEventListener("change",(e)=>{

  const filterValue = e.target.value;
  filterTodos(filterValue);
})