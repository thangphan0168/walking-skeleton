<script>
  import TaskList from "$lib/components/todos/TaskList.svelte";
  import { useTodoState } from "$lib/states/todoState.svelte";
  let { todoId } = $props();
  let todoState = useTodoState();
  let todo = $derived(todoState.todos.find((todo) => todo.id === todoId));
</script>

<h1>{todo ? todo.name: "Loading"}</h1>
<TaskList todoId={todoId} />
