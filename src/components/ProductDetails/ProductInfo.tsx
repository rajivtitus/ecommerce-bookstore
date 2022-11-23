import { ReactElement, useState } from "react";

import { Book } from "../../utils/types";

interface Props {
	book: Book;
}

const ProductInfo = ({ book }: Props): ReactElement => {
	const [selectedQuantity, setSelectedQuantity] = useState<number>(1);

	const handleIncrement = () => {
		setSelectedQuantity((prevQuantity) => prevQuantity + 1);
	};

	const handleDecrement = () => {
		setSelectedQuantity((prevQuantity) => prevQuantity - 1);
	};

	return (
		<div className="flex flex-col-reverse gap-10 pb-8 lg:gap-4 lg:flex-row">
			<div className="w-full lg:w-3/5 px-12 py-6 bg-gray-100 rounded-md">
				<h3 className="py-1 font-lora text-3xl">{book.title}</h3>
				<p className="py-1 italic text-lg text-gray-600">
					By {book.author.name}
				</p>
				<p className="leading-7 whitespace-pre-line">{book.description}</p>
			</div>
			<div className="w-full px-2 py-6 md:w-4/6 m-auto lg:m-0 lg:w-2/5 lg:px-12">
				<img
					className="w-full h-[35rem] m-auto object-contain lg:object-fill"
					src={book.coverImage}
					alt={book.title}
				/>
				<p className="pt-6 text-lg font-bold">Price: ${book.price}</p>
				<p className="pt-4 mb-8 text-lg font-bold">
					Quantity:
					<button
						disabled={selectedQuantity === 1}
						onClick={handleDecrement}
						className={`w-10 mx-4 text-2xl rounded
              ${selectedQuantity === 1 ? "bg-gray-100" : "bg-secondary"}
              `}
					>
						-
					</button>
					<span>{selectedQuantity}</span>
					<button
						disabled={selectedQuantity > 99}
						onClick={handleIncrement}
						className={`w-10 mx-4 text-2xl rounded
            ${selectedQuantity > 99 ? "bg-gray-100" : "bg-secondary"}
            `}
					>
						+
					</button>
				</p>
				<button className="w-full px-4 py-2 bg-primary text-lg text-white rounded">
					Add to Cart
				</button>
			</div>
		</div>
	);
};

export default ProductInfo;
