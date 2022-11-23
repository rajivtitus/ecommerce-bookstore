import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Book, NavItems } from "../../utils/types";

interface CartItem extends Book {
	quantity: number;
}

interface State {
	cart: CartItem[];
}

const initialState: State = {
	cart: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<Book>) => {
			const itemInCart = state.cart.find(
				(item) => item.id === action.payload.id
			);
			itemInCart
				? itemInCart.quantity++
				: state.cart.push({ ...action.payload, quantity: 1 });
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
