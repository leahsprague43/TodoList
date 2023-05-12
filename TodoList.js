  let todos2 = [];
const task = document.querySelector("#task");
const todoForm = document.querySelector("#todo-form");
    const todoList = document.querySelector("#todo-list");
document.addEventListener("DOMContentLoaded", function() {

    // retrieve from localStorage 
    todos2 = JSON.parse(localStorage.getItem("todos")) || [];
    for (let i = 0; i < todos2.length; i++) {
      let newTodo = document.createElement("li");
      newTodo.innerText = todos2[i].task;
      // newTodo.isCompleted = todos2[i].isCompleted ? true : false;
        if (todos2[i].isCompleted) {
          newTodo.style.textDecoration = 'line-through';
        }
    todoList.appendChild(newTodo);
}

    todoForm.addEventListener('submit', function(e) {
      e.preventDefault();

      let newTodo = document.createElement('li');

      let newTodoName = document.createElement('span');
        newTodoName.innerText = task.value;

      let removeBtn = document.createElement('button');
        removeBtn.innerText = 'remove';

      let completeBtn = document.createElement('button');
        completeBtn.innerText = 'complete';

      newTodo.appendChild(newTodoName);
      newTodo.appendChild(completeBtn);
      newTodo.appendChild(removeBtn);
      todoList.appendChild(newTodo);

      todos2.push({ task: task.value, isCompleted: false });
      localStorage.setItem("todos", JSON.stringify(todos2));
      
      completeBtn.addEventListener("click", function(e) {
        newTodo.style.textDecoration = 'line-through';
        newTodo.appendChild(removeBtn);
        

        // save to localStorage
        todos2.filter(t => t.task === task.value)[0].isCompleted = true;
        localStorage.setItem("todos", JSON.stringify(todos2));
        todoForm.reset();
        })
        
      removeBtn.addEventListener("click", function(e) {
        e.target.parentElement.remove();
      })
    })
})