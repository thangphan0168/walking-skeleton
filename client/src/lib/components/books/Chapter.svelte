<script>
  let { bookId, chapterId } = $props();

  import { useBookState } from "$lib/states/bookState.svelte.js";
  import { useChapterState } from "$lib/states/chapterState.svelte.js";

  let bookState = useBookState();
  let chapterState = useChapterState();

  let book = $derived(bookState.books.find((book) => book.id === bookId));
  let chapter = $derived(
    chapterState.chapters[bookId]?.find((c) => c.id === chapterId)
  );
</script>

<h1>{book ? book.name : "Loading..."}</h1>

{#if chapter}
  <h2>{chapter.name}</h2>

  <p>This is chapter {chapter.id} of book {book.id}.</p>
{:else}
  <p>Loading...</p>
{/if}
