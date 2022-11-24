import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Book, CartItem } from "../../utils/types";

interface State {
  cart: CartItem[];
}

interface AddToCartAction extends Book {
  quantity: number;
}

const initialState: State = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<AddToCartAction>) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      itemInCart
        ? (itemInCart.quantity += action.payload.quantity)
        : state.cart.push({
            ...action.payload,
            quantity: action.payload.quantity,
          });
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item && item.quantity++;
    },
    // Deduct item quantity only if it is greater than 1
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item && item.quantity === 1
        ? (item.quantity = 1)
        : item && item.quantity--;
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const newCart = state.cart.filter((item) => item.id !== action.payload);
      state.cart = newCart;
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions;

export default cartSlice.reducer;
