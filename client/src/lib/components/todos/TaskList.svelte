<script>
  let { todoId } = $props();
  import { useTaskState } from "$lib/states/taskState.svelte";

  let taskState = useTaskState();
  const deleteTask = async (taskId) => {
    await taskState.deleteTask(todoId, taskId);
  }
  const changeTaskStatus = async (task) => {
    await taskState.changeTaskStatus(todoId, task);
  }
</script>

<ul>
  {#each taskState.tasks[todoId] as task}
    {#if task.is_done}
    <li>
      <s>{task.description}</s>
      <button onclick={() => deleteTask(task.id)}>Remove</button>
      <button onclick={() => changeTaskStatus(task)}>Mark not done</button>
    </li>
    {:else}
    <li>
      <a href="/todos/{todoId}/tasks/{task.id}">{task.description}</a>
      <button onclick={() => deleteTask(task.id)}>Remove</button>
      <button onclick={() => changeTaskStatus(task)}>Mark done</button>
    </li>
    {/if}
    
  {/each}
</ul>
