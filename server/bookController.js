import * as bookRepository from "./bookRepository.js";

const create = async (c) => {
  const book = await c.req.json();
  if (!book.title ||
    !book.description ||
    !book.published_at ||
    !book.page_count) {
    return c.json({ error: "Missing required fields" }, 400);
  }

  const newBook = await bookRepository.create(book);
  return c.json(newBook);
};

const readAll = async (c) => {
  const books = await bookRepository.readAll();
  return c.json(books);
};

const readOne = async (c) => {
  const id = Number(c.req.param("bookId"));
  if (!Number.isInteger(id)) {
    return c.json({ error: "Invalid book id" }, 400);
  }

  const book = await bookRepository.readOne(id);

  if (!book) {
    return c.json({ error: "Book not found" }, 404);
  }

  return c.json(book);
};

const update = async (c) => {
  const id = Number(c.req.param("bookId"));
  if (!Number.isInteger(id)) {
    return c.json({ error: "Invalid book id" }, 400);
  }

  const book = await c.req.json();
  if (!book.title ||
    !book.description ||
    !book.published_at ||
    !book.page_count) {
    return c.json({ error: "Missing required fields" }, 400);
  }

  const updatedBook = await bookRepository.update(id, book);

  if (!updatedBook) {
    return c.json({ error: "Book not found" }, 404);
  }

  return c.json(updatedBook);
};

const deleteOne = async (c) => {
  const id = Number(c.req.param("bookId"));
  if (!Number.isInteger(id)) {
    return c.json({ error: "Invalid book id" }, 400);
  }

  const deletedBook = await bookRepository.deleteOne(id);

  if (!deletedBook) {
    return c.json({ error: "Book not found" }, 404);
  }

  return c.json(deletedBook);
};

export { create, deleteOne, readAll, readOne, update };
