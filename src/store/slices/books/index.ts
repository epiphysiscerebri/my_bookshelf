import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { booksArray } from "../../../shared";

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

const initialState: {
  books: any;
  selectedBookCard: any;
  loading: boolean;
  error: string | null | undefined;
} = {
  books: [],
  selectedBookCard: null,
  loading: false,
  error: null,
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
      // TODO: Поменять все any
      state.books = state.books.map((book: any, index: any) =>
        index + 1 == action.payload.index ? action.payload : book
      );
    },
  },
  selectors: {
    getBooksSelector: (state) => state.books,
    getSelectedBookCard: (state) => state.selectedBookCard,
  },
  extraReducers: (builder) => {
    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.books = action.payload;
    });
  },
});

export const BooksReducer = booksSlice.reducer;
export const { getBooksSelector, getSelectedBookCard } = booksSlice.selectors;

export const { selectBookCard, createBookCard, editBookCard } =
  booksSlice.actions;
