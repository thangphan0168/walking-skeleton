<script>
  import { useTodoState } from "$lib/states/todoState.svelte.js";
  let todoState = useTodoState();

  const addTodo = (e) => {
    e.preventDefault();

    const todo = Object.fromEntries(new FormData(e.target));
    todoState.addTodo(todo);
    e.target.reset();
  };
</script>

<form onsubmit={addTodo}>
  <label>
    Todo name
    <input
      id="todoName"
      name="name"
      type="text"
      placeholder="Todo"
    />
  </label>
  <input type="submit" value="Add Todo" />
</form>
