<script>
  import { initBooks } from "$lib/states/bookState.svelte.js";
  import BookList from "$lib/components/books/BookList.svelte";
  import BookForm from "$lib/components/books/BookForm.svelte";

  $effect(() => {
    initBooks();
  });
</script>

<h1 class="text-2xl font-bold text-primary-900 mb-4 mt-4">Books</h1>

<BookList />

<h2 class="text-2xl font-bold text-primary-900 mb-4 mt-4">Add a book</h2>

<BookForm />
