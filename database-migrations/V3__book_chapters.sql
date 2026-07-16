CREATE TABLE book_chapters (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  book_id INTEGER NOT NULL REFERENCES books(id) ON DELETE CASCADE,
  chapter_number INTEGER NOT NULL CHECK (chapter_number > 0),
  title TEXT NOT NULL CHECK (length(title) > 0),
  content TEXT
);
