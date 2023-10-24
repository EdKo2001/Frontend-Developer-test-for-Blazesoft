import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Book {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
}

export interface BookState {
  books: Book[];
}

const initialState: BookState = {
  books: [
    {
      id: 1,
      name: "The Catcher in the Rye",
      price: 12.99,
      category: "Fiction",
      description: "A classic novel by J.D. Salinger.",
    },
    {
      id: 2,
      name: "To Kill a Mockingbird",
      price: 14.99,
      category: "Fiction",
      description: "A novel by Harper Lee.",
    },
    {
      id: 3,
      name: "1984",
      price: 15.99,
      category: "Science Fiction",
      description: "A dystopian novel by George Orwell.",
    },
    {
      id: 4,
      name: "Sapiens: A Brief History of Humankind",
      price: 18.99,
      category: "Non-Fiction",
      description: "A book by Yuval Noah Harari.",
    },
    {
      id: 5,
      name: "The Great Gatsby",
      price: 13.99,
      category: "Fiction",
      description: "A novel by F. Scott Fitzgerald.",
    },
    {
      id: 6,
      name: "The Alchemist",
      price: 11.99,
      category: "Fiction",
      description: "A novel by Paulo Coelho.",
    },
    {
      id: 7,
      name: "Educated",
      price: 17.99,
      category: "Autobiography",
      description: "A memoir by Tara Westover.",
    },
    {
      id: 8,
      name: "The Hobbit",
      price: 16.99,
      category: "Fantasy",
      description: "A fantasy novel by J.R.R. Tolkien.",
    },
    {
      id: 9,
      name: "Thinking, Fast and Slow",
      price: 19.99,
      category: "Psychology",
      description: "A book by Daniel Kahneman.",
    },
    {
      id: 10,
      name: "The Silent Patient",
      price: 20.99,
      category: "Mystery",
      description: "A novel by Alex Michaelides.",
    },
  ],
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      state.books.push(action.payload);
    },
    updateBook: (state, action: PayloadAction<Book>) => {
      const index = state.books.findIndex(
        (book) => book.id === action.payload.id
      );
      if (index !== -1) {
        state.books[index] = action.payload;
      }
    },
    deleteBook: (state, action: PayloadAction<number>) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBook, updateBook, deleteBook } = bookSlice.actions;
export const selectBooks = (state: { book: BookState }) => state.book.books;
export const bookReducer = bookSlice.reducer;
