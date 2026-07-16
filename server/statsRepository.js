import postgres from "postgres";

const sql = postgres();

const countTodos = async () => {
  const result = await sql`SELECT COUNT(*) FROM todos`;
  return result[0];
};

const countTasks = async () => {
  const result = await sql`SELECT COUNT(*) FROM todo_tasks`;
  return result[0];
};

export { countTasks, countTodos };
