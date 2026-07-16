<!-- <script>
  import { page } from "$app/state";

  import ChapterForm from "$lib/components/books/ChapterForm.svelte";
  import ChapterList from "$lib/components/books/ChapterList.svelte";

  let bookId = $derived(parseInt(page.params.bookId));
</script>

<h1>Chapter list for book {bookId}</h1>

<ChapterList bookId={bookId} />

<ChapterForm bookId={bookId} /> -->
<script>
  import { page } from "$app/state";

  import Book from "$lib/components/books/Book.svelte";

  import ChapterForm from "$lib/components/books/ChapterForm.svelte";
  import ChapterList from "$lib/components/books/ChapterList.svelte";

  import { initBook } from "$lib/states/bookState.svelte.js";
  import { initBookChapters } from "$lib/states/chapterState.svelte.js";

  let bookId = $derived(parseInt(page.params.bookId));

  $effect(() => {
    initBook(bookId);
    initBookChapters(bookId);
  });
</script>

<Book bookId={bookId} />

<ChapterList bookId={bookId} />

<ChapterForm bookId={bookId} />
