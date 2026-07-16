import { PUBLIC_API_URL } from "$env/static/public";

const readChapters = async (bookId) => {
  const response = await fetch(
    `${PUBLIC_API_URL}/api/books/${bookId}/chapters`,
  );
  return await response.json();
};

const readChapter = async (bookId, chapterId) => {
  const response = await fetch(
    `${PUBLIC_API_URL}/api/books/${bookId}/chapters/${chapterId}`,
  );
  return await response.json();
};

const createChapter = async (bookId, chapter) => {
  const response = await fetch(
    `${PUBLIC_API_URL}/api/books/${bookId}/chapters`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(chapter),
    },
  );

  return await response.json();
};

const updateChapter = async (bookId, chapterId, chapter) => {
  const response = await fetch(
    `${PUBLIC_API_URL}/api/books/${bookId}/chapters/${chapterId}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(chapter),
    },
  );

  return await response.json();
};

const deleteChapter = async (bookId, chapterId) => {
  const response = await fetch(
    `${PUBLIC_API_URL}/api/books/${bookId}/chapters/${chapterId}`,
    {
      method: "DELETE",
    },
  );

  return await response.json();
};

export {
  createChapter,
  deleteChapter,
  readChapter,
  readChapters,
  updateChapter,
};
