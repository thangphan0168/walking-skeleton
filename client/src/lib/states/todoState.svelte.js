import { browser } from "$app/environment";
import * as todosApi from "$lib/apis/todosApi.js"

// const TODOS_KEYS = "todos";

// let initialTodos = [];
// if (browser && localStorage.getItem(TODOS_KEYS) != null) {
//   initialTodos = JSON.parse(localStorage.getItem(TODOS_KEYS))
// }

// let todoState = $state(initialTodos)

// const saveTodos = () => {
//   localStorage.setItem(TODOS_KEYS, JSON.stringify(todoState));
// }

let todoState = $state([]);

const initTodos = async () => {
  if (browser) {
    todoState = await todosApi.getTodos();
  }
}

const initTodo = async (id) => {
  if (browser) {
    const todo = await todosApi.getTodo(id);
    if (todo && !todoState.find((t) => t.id === todo.id)) {
      todoState.push(todo);
    }
  }
};

const useTodoState = () => {
  return {
    get todos() {
      return todoState;
    },
    addTodo: (todo) => {
      todosApi.createTodo(todo).then((newTodo) => {
        todoState.push(newTodo);
      })
    },
    deleteTodo: (id) => {
      todosApi.deleteTodo(id).then((removed) => {
        todoState = todoState.filter((t) => t.id !== removed.id);
      });
    }
  };
};

export { useTodoState, initTodo, initTodos };
