<script>
  let { todoId, taskId } = $props();

  import { useTaskState } from "$lib/states/taskState.svelte";

  let taskState = useTaskState();
  let task = $derived(
    taskState.tasks[todoId]?.find((t) => t.id == taskId)
  );

</script>

{#if task}
  <h1>{task.description}</h1>
{/if}
