import { browser } from "$app/environment";
import * as tasksApi from "$lib/apis/tasksApi.js"

// const TASKS_KEY = "tasks";
// let initialTasks = {};

// if (browser && localStorage.getItem(TASKS_KEY) != null) {
//   initialTasks = JSON.parse(localStorage.getItem(TASKS_KEY));
// }

// let taskState = $state(initialTasks);

// const saveTasks = () => {
//   localStorage.setItem(TASKS_KEY, JSON.stringify(taskState));
// };

let taskState = $state([]);

const initTasks = async (todoId) => {
  if (!browser) {
      return;
    }
  
  taskState[todoId] = await tasksApi.getTasks(todoId);
}

const useTaskState = () => {
  return {
    get tasks() {
      return taskState;
    },
    addTask: async (todoId, task) => {
      const newTask = await tasksApi.createTask(todoId, task);
      const tasks = taskState[todoId] || [];
      tasks.push(newTask);
      taskState[todoId] = tasks;
    },
    deleteTask: async (todoId, taskId) => {
      const removedTask = await tasksApi.deleteTask(todoId, taskId);
      taskState[todoId] = taskState[todoId].filter((task) => task.id !== removedTask.id);
    },
    changeTaskStatus: async (todoId, task) => {
      const changedTask = {
        ...task,
        is_done: !task.is_done,
      };

      const updatedTask = await tasksApi.updateTask(
        todoId,
        task.id,
        changedTask,
      );
      
      taskState[todoId] = taskState[todoId].map((t) =>
        t.id === updatedTask.id ? updatedTask : t
      );
    }
  };
};

export { initTasks, useTaskState };
