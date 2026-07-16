import { browser } from "$app/environment";
import * as booksApi from "$lib/apis/booksApi.js";

// const BOOKS_KEY = "books";
// let initialBooks = [];

// if (browser && localStorage.getItem(BOOKS_KEY) != null) {
//   initialBooks = JSON.parse(localStorage.getItem(BOOKS_KEY))
// }

// let bookState = $state(initialBooks);

// const saveBooks = () => {
//   localStorage.setItem(BOOKS_KEY, JSON.stringify(bookState));
// }

let bookState = $state([]);

const initBooks = async () => {
  if (browser) {
    bookState = await booksApi.readBooks();
  }
};

const initBook = async (id) => {
  if (browser) {
    const book = await booksApi.readBook(id);
    if (book && !bookState.find((b) => b.id === book.id)) {
      bookState.push(book);
    }
  }
};

const useBookState = () => {
  return {
    get books() {
      return bookState;
    },
    addBook: (book) => {
      booksApi.createBook(book).then((newBook) => {
        bookState.push(newBook);
      });
    },
    removeBook: (book) => {
      booksApi.deleteBook(book.id).then((removed) => {
        bookState = bookState.filter((b) => b.id !== removed.id);
      });
    },
    updateBook: (book) => {
      booksApi.updateBook(book.id, book).then((updatedBook) => {
        const index = bookState.findIndex((b) => b.id === updatedBook.id);
        if (index !== -1) {
          bookState[index] = updatedBook;
        }
      });
    },
  };
};

export { initBooks, initBook, useBookState };
