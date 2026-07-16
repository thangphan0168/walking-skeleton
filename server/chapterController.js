import * as chapterRepository from "./chapterRepository.js";

const create = async (c) => {
  const bookId = Number(c.req.param("bookId"));
  if (!Number.isInteger(bookId)) {
    return c.json({ error: "Invalid book id" }, 400);
  }

  const chapter = await c.req.json();

  if (!chapter.chapter_number ||
    !chapter.title) {
    return c.json({ error: "Missing required fields" }, 400);
  }

  const newChapter = await chapterRepository.create(bookId, chapter);
  return c.json(newChapter, 201);
};

const readAll = async (c) => {
  const bookId = Number(c.req.param("bookId"));
  if (!Number.isInteger(bookId)) {
    return c.json({ error: "Invalid book id" }, 400);
  }

  const chapters = await chapterRepository.readAll(bookId);
  return c.json(chapters);
};

const readOne = async (c) => {
  const bookId = Number(c.req.param("bookId"));
  if (!Number.isInteger(bookId)) {
    return c.json({ error: "Invalid book id" }, 400);
  }

  const chapterId = Number(c.req.param("chapterId"));
  if (!Number.isInteger(chapterId)) {
    return c.json({ error: "Invalid chapter id" }, 400);
  }

  const chapter = await chapterRepository.readOne(bookId, chapterId);

  if (!chapter) {
    return c.json({ error: "Chapter not found" }, 404);
  }

  return c.json(chapter);
};

const update = async (c) => {
  const bookId = Number(c.req.param("bookId"));
  if (!Number.isInteger(bookId)) {
    return c.json({ error: "Invalid book id" }, 400);
  }

  const chapterId = Number(c.req.param("chapterId"));
  if (!Number.isInteger(chapterId)) {
    return c.json({ error: "Invalid chapter id" }, 400);
  }

  const chapter = await c.req.json();

  if (!chapter.chapter_number ||
    !chapter.title) {
    return c.json({ error: "Missing required fields" }, 400);
  }

  const updatedChapter = await chapterRepository.update(
    bookId,
    chapterId,
    chapter,
  );

  if (!updatedChapter) {
    return c.json({ error: "Chapter not found" }, 404);
  }

  return c.json(updatedChapter);
};

const deleteOne = async (c) => {
  const bookId = Number(c.req.param("bookId"));
  if (!Number.isInteger(bookId)) {
    return c.json({ error: "Invalid book id" }, 400);
  }

  const chapterId = Number(c.req.param("chapterId"));
  if (!Number.isInteger(chapterId)) {
    return c.json({ error: "Invalid chapter id" }, 400);
  }

  const deletedChapter = await chapterRepository.deleteOne(bookId, chapterId);

  if (!deletedChapter) {
    return c.json({ error: "Chapter not found" }, 404);
  }

  return c.json(deletedChapter);
};

export { create, deleteOne, readAll, readOne, update };
