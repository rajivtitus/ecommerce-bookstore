import { CartItem } from "../utils/types";

export const calcCartTotal = (items: CartItem[]): number => {
	return items.reduce((sum, cur: CartItem) => {
		const { price, quantity } = cur;
		return (sum += price * quantity);
	}, 0);
};
