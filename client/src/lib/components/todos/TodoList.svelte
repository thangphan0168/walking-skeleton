<script>
  import { useTodoState } from "$lib/states/todoState.svelte";
  let todoState = useTodoState();
  const deleteTodo = (id) => {
    todoState.deleteTodo(id);
  }
</script>

<h1>Todos</h1>

<ul>
  {#each todoState.todos as todo}
    <li>
      <a href="/todos/{todo.id}">{todo.name}</a>
      <button onclick={() => deleteTodo(todo.id)}>Remove</button>
    </li>
  {/each}
</ul>
