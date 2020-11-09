/**
 * TODO APP
 * It should be able to create/add a Todo
 * It should have a place to store todo
 * It should have a way to display/render the todos
 * It should mark todos as completed.
 * It should handle an empty state with a prompt
 * It should have a way to edit todos
 * It should have a way to delete todos
 *
 *
 */

import sayName from './alertService';

// const todoList = {
//   todos: [{ title: 'item1', completed: false }],
//   // Render todos
//   renderTodo() {
//     if (this.todos.length === 0) {
//       console.log('Empty todo you have');
//     } else {
//       // The todos will come from local storage
//       for (let i = 0; i < this.todos.length; i++) {
//         const todoItem = this.todos[i].title;
//         console.log('your todos:', todoItem);
//         if (this.todos[i].completed === true) {
//           console.log('(X):', this.todos[i].title);
//         } else {
//           console.log('():', this.todos[i].title);
//         }
//       }
//     }
//   },

//   // Add Todos
//   addTodo(title) {
//     this.todos.push({ title, completed: false });
//     this.renderTodo();
//   },

//   // Edit todos
//   editTodo(position, newTodo) {
//   // The todos will come from input fields
//     this.todos[position].title = newTodo;
//     this.renderTodo();
//   },

//   // Delete Todos

//   deleteTodo(position) {
//     this.todos.splice(position, 1);
//     this.renderTodo();
//   },

//   // Toggle Completed
//   toggleCompleted(position) {
//     const todo = this.todos[position];
//     todo.completed = !todo.completed;
//     this.renderTodo();
//   },

//   toggleAll() {
//     totalTodos = this.todos.length;
//     let completedTodos = 0;
//     for (let i = 0; i < totalTodos; i++) {
//       if (this.todos[i].completed === true) {
//         completedTodos++;
//       }
//     }
//     if (completedTodos === totalTodos) {
//     // Make everything false
//       for (let i = 0; i < totalTodos; i++) {
//         this.todos[i].completed = false;
//       }
//     } else {
//       for (let i = 0; i < totalTodos; i++) {
//         this.todos[i].completed = true;
//       }
//     }
//     this.renderTodo();
//   },

// };
const todoInput = document.querySelector('.todo-input')
const todoBtn = document.querySelector('.todo-btn')
const todoList = document.querySelector('.todo-list')
const filterOption = document.querySelector('.filter-todo')

// Event Listeners
document.addEventListener('DOMContentLoaded',getTodos)
todoBtn.addEventListener('click',addTodo)
todoList.addEventListener('click', deleteAndCheck)
filterOption.addEventListener('click', filterTodo)


// Functions

function addTodo(e) { 
  e.preventDefault()

  // TODO div
  const todoDiv = document.createElement('div')
  todoDiv.classList.add('todo')
  // Create li

  const newTodo = document.createElement('li')
  newTodo.classList.add('todo-item')
  newTodo.textContent = todoInput.value
  todoDiv.appendChild(newTodo)

  // Save to localStorage
  saveToLocalstorage(todoInput.value)

  // check mark button
  const completedBtn = document.createElement('button')
  completedBtn.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>'
  completedBtn.classList.add('complete-btn')
  todoDiv.appendChild(completedBtn)
  // check trash button
  const trashBtn = document.createElement('button')
  trashBtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>'
  trashBtn.classList.add('trash-btn')
  todoDiv.appendChild(trashBtn)

  // Append to todoList
  todoList.appendChild(todoDiv)

  // Clear Input field
  todoInput.value = ""
 }


 
 function deleteAndCheck(e){
   console.log(e.target)

//  DELETE TODO
const itemToDelete = e.target
console.log(itemToDelete.classList[0])
if (itemToDelete.classList[0]=== 'trash-btn') {

  const todo = itemToDelete.parentElement
  // Animation
  todo.classList.add('fall')
  removeTodoFromLocalstorage(todo)
  todo.addEventListener("transitionend",function(){
    todo.remove()

  })
}

// CHECK MARK
if (itemToDelete.classList[0]=== 'complete-btn') {

  const todo = itemToDelete.parentElement
  todo.classList.toggle('completed')
}
     
 
 }

 function filterTodo(e) { 
   const todos = todoList.childNodes
   console.log(todos)
   todos.forEach((todo)=>{
    switch(e.target.value){//value of select option
      case "all":
         todo.style.display = 'flex'
        break;
      case "completed":
        if (todo.classList.contains('completed')) {
          todo.style.display = 'flex'
          
        }else{
          todo.style.display = 'none'
        } 
        break 
      case "uncompleted":
        if (!todo.classList.contains('completed')) {
          todo.style.display = 'flex'
          
        }else{
          todo.style.display = 'none'
        }
        break  
    }
   })
  }


  // Save to localStorage
  function saveToLocalstorage(todo){
    // check if something is already stored
    let todos;
    if (localStorage.getItem('todos')===null) {
      todos = []
      
    }else{
      todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.push(todo)
    localStorage.setItem('todos', JSON.stringify(todos))
  }


  // Get Todos 
function getTodos(){
    // check if something is already stored
    let todos;
    if (localStorage.getItem('todos')===null) {
      todos = []
      
    }else{
      todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.forEach((todo)=>{
       // TODO div
  const todoDiv = document.createElement('div')
  todoDiv.classList.add('todo')
  // Create li

  const newTodo = document.createElement('li')
  newTodo.classList.add('todo-item')
  newTodo.textContent = todo
  todoDiv.appendChild(newTodo)

  // check mark button
  const completedBtn = document.createElement('button')
  completedBtn.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>'
  completedBtn.classList.add('complete-btn')
  todoDiv.appendChild(completedBtn)
  // check trash button
  const trashBtn = document.createElement('button')
  trashBtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>'
  trashBtn.classList.add('trash-btn')
  todoDiv.appendChild(trashBtn)

  // Append to todoList
  todoList.appendChild(todoDiv)

    })
  }


  // Remove todo from localStorage
  function removeTodoFromLocalstorage(todo){
    // check if something is already stored
    let todos;
    if (localStorage.getItem('todos')===null) {
      todos = []
      
    }else{
      todos = JSON.parse(localStorage.getItem('todos'))
    }
    // Grab the li tag inside the div and get the text
    console.log(todo.children[0].innerText)
    todos.splice(todos.indexOf(todo.children[0].innerText),1)
     localStorage.setItem('todos', JSON.stringify(todos))
  }




const component = () => {
  const element = document.createElement('div');
  element.className = 'say-name';
  element.style.color = '#fff';

  element.innerHTML = sayName('Marshall');
  // value of the function when called
  return element;
};

const render = () => {
  document.body.appendChild(component());
};


export { component, render };