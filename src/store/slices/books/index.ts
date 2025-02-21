import { TBook } from "./../../../types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { booksArray } from "../../../shared";

type TInitialState = {
  books: TBook[];
  selectedBookCard: TBook | null;
  booksDeleted: string[];
};

// Имитация работы с асинхронными запосами
export const getBooks = createAsyncThunk(
  "books/getBooks",
  async (_, { rejectWithValue }) => {
    try {
      return booksArray;
    } catch (error) {
      return rejectWithValue("Ошибка загрузки");
    }
  }
);

const initialState: TInitialState = {
  books: [],
  selectedBookCard: null,
  booksDeleted: [],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    selectBookCard: (state, action) => {
      state.selectedBookCard = action.payload;
    },
    createBookCard: (state, action) => {
      state.books.push(action.payload);
    },
    editBookCard: (state, action) => {
      state.books = state.books.map((book: TBook, index: number) =>
        index + 1 == action.payload.index ? action.payload : book
      );
    },
    selectBookCardsWillDelete: (state, action) => {
      state.booksDeleted = action.payload.checked
        ? Array.from(new Set([...state.booksDeleted, action.payload.id]))
        : state.booksDeleted.filter(
            (idBook: string) => idBook !== action.payload.id
          );
    },
    deleteBookCards: (state) => {
      state.books = state.books.filter(
        (book: TBook) => !state.booksDeleted.includes(book.id)
      );
    },
  },
  selectors: {
    getBooksSelector: (state) => state.books,
    getSelectedBookCard: (state) => state.selectedBookCard,
    getDeletedBookCards: (state) => state.booksDeleted,
  },
  extraReducers: (builder) => {
    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.books = action.payload;
    });
  },
});

export const BooksReducer = booksSlice.reducer;
export const { getBooksSelector, getSelectedBookCard, getDeletedBookCards } =
  booksSlice.selectors;

export const {
  selectBookCard,
  createBookCard,
  editBookCard,
  selectBookCardsWillDelete,
  deleteBookCards,
} = booksSlice.actions;
