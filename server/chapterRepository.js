import postgres from "postgres";

const sql = postgres();

const create = async (bookId, chapter) => {
  const result = await sql`INSERT INTO book_chapters
    (book_id, chapter_number, title, content)
    VALUES (${bookId}, ${chapter.chapter_number}, ${chapter.title}, ${chapter.content})
    RETURNING *;`;

  return result[0];
};

const readAll = async (bookId) => {
  return await sql`SELECT * FROM book_chapters
    WHERE book_id = ${bookId}
    ORDER BY chapter_number;`;
};

const readOne = async (bookId, chapterId) => {
  const result = await sql`SELECT * FROM book_chapters
    WHERE book_id = ${bookId} AND id = ${chapterId};`;
  return result[0];
};

const update = async (bookId, chapterId, chapter) => {
  const result = await sql`UPDATE book_chapters SET
      chapter_number = ${chapter.chapter_number},
      title = ${chapter.title},
      content = ${chapter.content}
    WHERE book_id = ${bookId} AND id = ${chapterId}
    RETURNING *;`;

  return result[0];
};

const deleteOne = async (bookId, chapterId) => {
  const result = await sql`DELETE FROM book_chapters
    WHERE book_id = ${bookId} AND id = ${chapterId}
    RETURNING *;
  `;

  return result[0];
};

export { create, deleteOne, readAll, readOne, update };
