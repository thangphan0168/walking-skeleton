<script>
    import { page } from "$app/state";
    import { initTodo } from "$lib/states/todoState.svelte";
    import { initTasks } from "$lib/states/taskState.svelte";
    import Todo from "$lib/components/todos/Todo.svelte";
    import TaskForm from "$lib/components/todos/TaskForm.svelte";

    let todoId = $derived(parseInt(page.params.todoId));

    $effect(() => {
        initTodo(todoId);
        initTasks(todoId);
    });
</script>

<Todo todoId={todoId} />

<TaskForm todoId={todoId} />
