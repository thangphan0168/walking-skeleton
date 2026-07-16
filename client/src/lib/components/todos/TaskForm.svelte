<script>
  import { useTaskState } from "$lib/states/taskState.svelte.js";
  let { todoId } = $props();
  let taskState = useTaskState();

  const addTask = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const task = Object.fromEntries(formData);
    task.is_done = formData.has("is_done");

    taskState.addTask(todoId, task);
    e.target.reset();
  };
</script>

<form onsubmit={addTask}>
  <label>
    Task description
    <input 
      id="description"
      name="description"
      type="text"
      placeholder="Task"
    />
  </label>
  <label>
    Is done
    <input
      id="is_done"
      name="is_done"
      type="checkbox"
    />
  </label>
  <input type="submit" value="Add Task"/>
</form>
