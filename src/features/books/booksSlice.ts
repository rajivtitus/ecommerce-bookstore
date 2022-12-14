import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { Book } from "../../utils/types";
import getBooks from "../../api/getBooks";

interface State {
  books: Book[];
  isLoading: boolean;
  error: string | null | undefined;
}

const initialState: State = {
  books: [],
  isLoading: false,
  error: null,
};

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const response = await getBooks();
  return response;
});

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      // The below case will never be met since we are always resolving the getBooks promise
      // In a real world scenario, we would handle the rejected case as well
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default booksSlice.reducer;
