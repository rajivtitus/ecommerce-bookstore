import { ReactElement } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import Layout from "../components/Layout";
import { useAppSelector } from "../app/hooks";
import { calcCartTotal } from "../utils/helpers";
import CartRecord from "../components/Cart/CartRecord";
import { Paths } from "../utils/types";
import Button from "../components/Button";
import AlternateText from "../components/AlternateText";
import Heading from "../components/Heading";

const Cart = (): ReactElement => {
	const cartItems = useAppSelector((state) => state.checkout.cart);
	const cartTotal = calcCartTotal(cartItems).toFixed(2);

	return (
		<Layout>
			<Heading
				className="text-center mb-8"
				component="h1"
				text="Your Shopping Cart"
				size="3xl"
			/>
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
				<AlternateText text="There are currently no items in your cart">
					<Link to={Paths.Products}>
						<Button>shop now</Button>
					</Link>
				</AlternateText>
			)}
		</Layout>
	);
};

export default Cart;
