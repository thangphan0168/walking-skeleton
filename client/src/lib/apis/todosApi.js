import { PUBLIC_API_URL } from "$env/static/public";
import { authFetch } from "$lib/utils/fetchUtils.js";

const getTodos = async () => {
  const response = await authFetch(`${PUBLIC_API_URL}/api/todos`);
  return await response.json();
}

const getTodo = async (id) => {
  const response = await authFetch(`${PUBLIC_API_URL}/api/todos/${id}`);
  return await response.json();
}

const createTodo = async (todo) => {
  const response = await authFetch(`${PUBLIC_API_URL}/api/todos`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(todo),
  });

  return await response.json();
}

const updateTodo = async (id, todo) => {
  const response = await authFetch(`${PUBLIC_API_URL}/api/todos/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(todo),
  });

  return await response.json();
}

const deleteTodo = async (id) => {
  const response = await authFetch(`${PUBLIC_API_URL}/api/todos/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "DELETE"
  });

  return await response.json();
}

export {getTodos, getTodo, createTodo, updateTodo, deleteTodo};
