import { configureStore } from "@reduxjs/toolkit";

import booksReducer from "../features/books/booksSlice";
import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    products: booksReducer,
    checkout: cartReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
