import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { Book, Status } from "../../utils/types";
import getBooks from "../../api/getBooks";

interface State {
	books: Book[];
	status: Status;
	error: string | null | undefined;
}

const initialState: State = {
	books: [],
	status: Status.Idle,
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
			.addCase(fetchBooks.pending, (state, action) => {
				state.status = Status.Pending;
			})
			.addCase(fetchBooks.fulfilled, (state, action) => {
				state.status = Status.Fulfilled;
				state.books = action.payload;
			})
			.addCase(fetchBooks.rejected, (state, action) => {
				state.status = Status.Rejected;
				state.error = action.error.message;
			});
	},
});

export default booksSlice.reducer;
