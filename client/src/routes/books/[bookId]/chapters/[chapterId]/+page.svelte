<script>
  import { page } from "$app/state";
  import Chapter from "$lib/components/books/Chapter.svelte";

  let bookId = $derived(parseInt(page.params.bookId));
  let chapterId = $derived(parseInt(page.params.chapterId));
</script>

<Chapter bookId={bookId} chapterId={chapterId} />
