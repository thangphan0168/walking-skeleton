import * as statsRepository from './statsRepository.js';


const getStats = async (c) => {
  const countTodos = await statsRepository.countTodos();
  const countTasks = await statsRepository.countTasks();
  return c.json({todos: Number.parseInt(countTodos.count), tasks: Number.parseInt(countTasks.count)});
}

export { getStats };
