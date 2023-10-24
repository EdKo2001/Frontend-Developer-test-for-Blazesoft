import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Book {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
}

interface BookState {
  books: Book[];
}

const initialState: BookState = {
  books: [],
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
