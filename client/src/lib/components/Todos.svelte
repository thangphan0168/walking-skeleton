<script>
  let todoList = $state([])
  let todoText = $state("");

  const addTodo = () => {
    const item = {
      id: todoList.length + 1,
      text: todoText,
      done: false
    };
    todoList.push(item);
    todoText = "";
  }

  const markDone = (item) => {
    item.done = true;
  }
</script>

<h1>Todos</h1>
<input type="text" bind:value={todoText}/>
<button onclick={addTodo}>Add</button>

<h2>Pending</h2>
<ul>
    {#each todoList as item}
      {#if !item.done}
        <li>
          {item.text}
          <button onclick={() => markDone(item)}>Done</button>
        </li>
      {/if}
    {/each}
</ul>

<h2>Completed</h2>
<ul>
    {#each todoList as item}
      {#if item.done}
        <li>{item.text}</li>
      {/if}
    {/each}
</ul>
