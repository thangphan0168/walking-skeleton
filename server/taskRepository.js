import postgres from "postgres";

const sql = postgres();

const create = async (userId, todoId, task) => {
  const userTodo = await sql`SELECT * FROM todos
    WHERE id = ${todoId} AND user_id = ${userId}`;

  if (!userTodo[0]) {
    return null;
  }

  const result = await sql`
    INSERT INTO todo_tasks (todo_id, description, is_done)
    VALUES (${todoId}, ${task.description}, ${task.is_done ?? false})
    RETURNING *`;

  return result[0];
};

const deleteById = async (userId, id) => {
  const userTodoTaskCount = await sql`
    SELECT COUNT(*) AS count
      FROM todo_tasks
      JOIN todos ON todo_tasks.todo_id = todos.id
      WHERE todo_tasks.id = ${id} AND todos.user_id = ${userId}`;

  if (userTodoTaskCount[0]?.count === "0") {
    return null;
  }

  const result = await sql`
    DELETE FROM todo_tasks
    WHERE id = ${id}
    RETURNING *`;

  return result[0];
};

const findAll = async (userId, todoId) => {
  const userTodo = await sql`SELECT * FROM todos
    WHERE id = ${todoId} AND user_id = ${userId}`;

  if (!userTodo[0]) {
    return null;
  }

  return await sql`
    SELECT * FROM todo_tasks
    WHERE todo_id = ${todoId}`;
};

const findById = async (userId, id) => {
  const userTodoTaskCount = await sql`
    SELECT COUNT(*) AS count
      FROM todo_tasks
      JOIN todos ON todo_tasks.todo_id = todos.id
      WHERE todo_tasks.id = ${id} AND todos.user_id = ${userId}`;

  if (userTodoTaskCount[0]?.count === "0") {
    return null;
  }

  const result = await sql`
    SELECT * FROM todo_tasks
    WHERE id = ${id}`;

  return result[0];
};

const updateById = async (userId, id, task) => {
  const userTodoTaskCount = await sql`
    SELECT COUNT(*) AS count
      FROM todo_tasks
      JOIN todos ON todo_tasks.todo_id = todos.id
      WHERE todo_tasks.id = ${id} AND todos.user_id = ${userId}`;

  if (userTodoTaskCount[0]?.count === "0") {
    return null;
  }

  const result = await sql`
    UPDATE todo_tasks
    SET
      description = ${task.description},
      is_done = ${task.is_done}
    WHERE id = ${id}
    RETURNING *`;

  return result[0];
};

export { create, deleteById, findAll, findById, updateById };
