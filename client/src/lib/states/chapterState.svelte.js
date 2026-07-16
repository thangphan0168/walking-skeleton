import { browser } from "$app/environment";
import * as chaptersApi from "$lib/apis/chaptersApi.js";

let chapterState = $state({});

const initBookChapters = async (bookId) => {
  if (!browser) {
    return;
  }

  chapterState[bookId] = await chaptersApi.readChapters(bookId);
};


// const CHAPTERS_KEY = "chapters";
// let initialChapters = {};

// if (browser && localStorage.getItem(CHAPTERS_KEY) != null) {
//   initialChapters = JSON.parse(localStorage.getItem(CHAPTERS_KEY));
// }

// let chapterState = $state(initialChapters);

// const saveChapters = () => {
//   localStorage.setItem(CHAPTERS_KEY, JSON.stringify(chapterState));
// };

const useChapterState = () => {
  return {
    get chapters() {
      return chapterState;
    },
    addChapter: (bookId, chapter) => {
      chaptersApi.createChapter(bookId, chapter).then((newChapter) => {
        const chapters = chapterState[bookId] || [];
        chapters.push(newChapter);
        chapterState[bookId] = chapters;
      });
    },
  };
};

export { useChapterState, initBookChapters };
