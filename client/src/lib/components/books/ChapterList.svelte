<script>
  let { bookId } = $props();
  import { useChapterState } from "$lib/states/chapterState.svelte.js";
  let chapterState = useChapterState();
</script>

<ul>
  {#each chapterState.chapters[bookId] as chapter}
    <li>
      <a href={`/books/${bookId}/chapters/${chapter.id}`}>
        {chapter.chapter_number}. {chapter.title} ({chapter.content.length} characters)
      </a>
    </li>
  {/each}
</ul>
