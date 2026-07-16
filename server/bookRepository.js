import postgres from "postgres";

const sql = postgres();

const create = async (book) => {
  const result = await sql`INSERT INTO books
    (title, description, published_at, page_count)
    VALUES (${book.title}, ${book.description}, ${book.published_at}, ${book.page_count})
    RETURNING *;`;

  return result[0];
};

const readAll = async () => {
  return await sql`SELECT * FROM books`;
};

const readOne = async (id) => {
  const result = await sql`SELECT * FROM books WHERE id = ${id}`;
  return result[0];
};

const update = async (id, book) => {
  const result = await sql`UPDATE books SET
      title = ${book.title},
      description = ${book.description},
      published_at = ${book.published_at},
      page_count = ${book.page_count}
    WHERE id = ${id}
    RETURNING *;`;
  return result[0];
};

const deleteOne = async (id) => {
  const result = await sql`DELETE FROM books
    WHERE id = ${id} RETURNING *`;
  return result[0];
};

export { create, deleteOne, readAll, readOne, update };
