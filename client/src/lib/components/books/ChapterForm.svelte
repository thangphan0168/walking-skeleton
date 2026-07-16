<script>
  import { useChapterState } from "$lib/states/chapterState.svelte.js";
  let { bookId } = $props();
  let chapterState = useChapterState();

  const addChapter = (e) => {
    e.preventDefault();

    const chapter = Object.fromEntries(new FormData(e.target));
    chapterState.addChapter(bookId, chapter)
    e.target.reset();
  };
</script>

<form onsubmit={addChapter}>
  <label>
    Chapter Title
    <input type="text" id="title" name="title"/>
  </label>
  <br/>
  <label>
    Content
    <textarea
      id="content"
      name="content"
    ></textarea>
  </label>
  <br/>
  <label>
    Chapter number
    <input type="number" id="chapter_number" name="chapter_number"/>
  </label>
  <br/>
  <input type="submit" value="Add Chapter" />
</form>
