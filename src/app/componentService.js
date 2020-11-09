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