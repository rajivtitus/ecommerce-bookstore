import { ReactElement, useState } from "react";

import { Book } from "../../utils/types";
import { useAppDispatch } from "../../app/hooks";
import { addToCart } from "../../features/cart/cartSlice";
import Quantity from "../Quantity";
import useToast from "../Toast/useToast";
import Button from "../Button";
import Heading from "../Heading";

interface Props {
	book: Book;
}

const ProductInfo = ({ book }: Props): ReactElement => {
	const [selectedQuantity, setSelectedQuantity] = useState<number>(1);
	const dispatch = useAppDispatch();
	const { addToast } = useToast();

	const handleIncrement = () => {
		setSelectedQuantity((prevQuantity) => prevQuantity + 1);
	};

	const handleDecrement = () => {
		setSelectedQuantity((prevQuantity) => prevQuantity - 1);
	};

	const handleAddToCart = () => {
		dispatch(addToCart({ ...book, quantity: selectedQuantity }));
		addToast({
			type: "success",
			message: "Successfully added item to cart!",
			position: "bottomCenter",
			duration: 1000,
		});
	};

	return (
		<div className="flex gap-4 pb-8">
			<div className="min-w-[525px] w-3/5 px-12 py-6 bg-lightGray rounded">
				<Heading size="3xl" component="h3" text={book.title} />
				<p className="py-1 italic text-lg text-darkGray">
					By {book.author.name}
				</p>
				<p className="leading-7 whitespace-pre-line">{book.description}</p>
			</div>
			<div className="min-w-[350px] max-w-[400px] mx-auto h-[25rem] w-2/5 px-12">
				<img
					className="object-fill rounded"
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
				<Button onClick={handleAddToCart} className="w-full">
					add to cart
				</Button>
			</div>
		</div>
	);
};

export default ProductInfo;
