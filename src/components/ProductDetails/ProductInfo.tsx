import { ReactElement, useState } from "react";

import { Book } from "../../utils/types";
import { useAppDispatch } from "../../app/hooks";
import { addToCart } from "../../features/cart/cartSlice";
import Quantity from "../Quantity";

interface Props {
	book: Book;
}

const ProductInfo = ({ book }: Props): ReactElement => {
	const [selectedQuantity, setSelectedQuantity] = useState<number>(1);
	const dispatch = useAppDispatch();

	const handleIncrement = () => {
		setSelectedQuantity((prevQuantity) => prevQuantity + 1);
	};

	const handleDecrement = () => {
		setSelectedQuantity((prevQuantity) => prevQuantity - 1);
	};

	return (
		<div className="flex gap-4 pb-8">
			<div className="min-w-[580px] w-3/5 px-12 py-6 bg-lightGray rounded">
				<h3 className="py-1 font-lora text-3xl">{book.title}</h3>
				<p className="py-1 italic text-lg text-darkGray">
					By {book.author.name}
				</p>
				<p className="leading-7 whitespace-pre-line">{book.description}</p>
			</div>
			<div className="min-w-[350px] max-w-[400px] mx-auto h-[25rem] w-2/5 px-12">
				<img
					className="w-full h-full object-fill rounded"
					src={book.coverImage}
					alt={book.title}
				/>
				<p className="pt-6 text-lg font-bold">Price: ${book.price}</p>
				<div className="pt-2 mb-6">
					<Quantity
						quantity={selectedQuantity}
						decrement={handleDecrement}
						increment={handleIncrement}
					/>
				</div>
				<button
					onClick={() =>
						dispatch(addToCart({ ...book, quantity: selectedQuantity }))
					}
					className="w-full px-4 py-2 bg-primary text-lg text-white rounded"
				>
					Add to Cart
				</button>
			</div>
		</div>
	);
};

export default ProductInfo;
