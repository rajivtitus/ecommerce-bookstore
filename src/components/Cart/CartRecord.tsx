import { ReactElement } from "react";

import { CartItem } from "../../utils/types";
import { useAppDispatch } from "../../app/hooks";
import {
	incrementQuantity,
	decrementQuantity,
	removeItem,
} from "../../features/cart/cartSlice";
import Quantity from "../Quantity";

interface Props {
	item: CartItem;
}

const CartRecord = ({ item }: Props): ReactElement => {
	const dispatch = useAppDispatch();

	const handleDecrement = () => {
		dispatch(decrementQuantity(item.id));
	};

	const handleIncrement = () => {
		dispatch(incrementQuantity(item.id));
	};

	return (
		<div className="flex items-center relative gap-10 px-8 py-4 mx-4 mb-8 bg-lightGray rounded shadow-md">
			<div className="w-2/12 flex justify-center">
				<img
					className="w-3/4 xl:w-2/4 h-[10rem] object-fill rounded"
					src={item.coverImage}
					alt={item.title}
				/>
			</div>
			<div className="w-7/12">
				<h3 className="font-lora text-2xl">{item.title}</h3>
				<p className="py-1 italic text-lg text-darkGray">
					By {item.author.name}
				</p>
				<p>
					{item.description.length > 175
						? item.description.substring(0, 175) + "..."
						: item.description}
				</p>
			</div>
			<div className="w-3/12 flex flex-col">
				<p className="text-lg font-bold">Price: ${item.price.toFixed(2)}</p>
				<Quantity
					quantity={item.quantity}
					decrement={handleDecrement}
					increment={handleIncrement}
				/>
			</div>
			<button
				onClick={() => dispatch(removeItem(item.id))}
				className="absolute top-0 right-0 px-4 py-2 text-xl font-bold bg-secondary rounded"
			>
				x
			</button>
		</div>
	);
};

export default CartRecord;
