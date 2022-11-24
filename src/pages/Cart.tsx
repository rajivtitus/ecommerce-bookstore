import { ReactElement } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import Layout from "../components/Layout";
import { useAppSelector } from "../app/hooks";
import { calcCartTotal } from "../utils/helpers";
import CartRecord from "../components/Cart/CartRecord";
import { Paths } from "../utils/types";

const Cart = (): ReactElement => {
	const cartItems = useAppSelector((state) => state.checkout.cart);
	const cartTotal = calcCartTotal(cartItems).toFixed(2);

	return (
		<Layout>
			<h2 className="py-2 mb-8 text-center font-lora text-3xl">
				Your Shopping Cart
			</h2>
			{cartItems.length ? (
				<>
					<div
						className={classNames("min-w-[875px] overflow-auto", {
							"h-3/5": cartItems.length > 2,
						})}
					>
						{cartItems.map((item) => (
							<CartRecord item={item} key={item.id} />
						))}
					</div>
					<div className="flex justify-end items-center gap-8 py-8 mr-14 lg:mr-24 xl:mr-30">
						<p className="px-4 py-2 text-xl font-bold bg-primary text-white rounded ">
							Total Price:
						</p>
						<p className="text-xl font-bold">${cartTotal}</p>
					</div>
				</>
			) : (
				<div className="py-16 text-center">
					<h4 className="mb-8 text-2xl ">
						There are currently no items in your cart
					</h4>
					<Link to={Paths.Products}>
						<button className="px-4 py-2 bg-primary text-lg text-white rounded">
							Shop Now
						</button>
					</Link>
				</div>
			)}
		</Layout>
	);
};

export default Cart;
