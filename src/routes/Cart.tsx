import { ReactElement } from "react";

import Layout from "../components/Layout";
import { useAppSelector } from "../app/hooks";
import { calcCartTotal } from "../utils/helpers";
import CartRecord from "../components/Cart/CartRecord";

const Cart = (): ReactElement => {
	const cartItems = useAppSelector((state) => state.checkout.cart);
	const cartTotal = calcCartTotal(cartItems).toFixed(2);

	return (
		<Layout>
			{cartItems.length ? (
				<>
					<div
						className={`min-w-[950px] 
						${cartItems.length > 2 ? "h-3/5" : ""} overflow-auto`}
					>
						{cartItems.map((item) => (
							<CartRecord item={item} key={item.id} />
						))}
					</div>
					<div className="flex justify-end items-center gap-8 p-8 mr-12">
						<p className="px-4 py-2 text-xl font-bold bg-primary text-white rounded ">
							Total Price:
						</p>
						<p className="text-xl font-bold">${cartTotal}</p>
					</div>
				</>
			) : (
				<h4 className="text-2xl text-center">
					There are currently no items in your cart
				</h4>
			)}
		</Layout>
	);
};

export default Cart;
