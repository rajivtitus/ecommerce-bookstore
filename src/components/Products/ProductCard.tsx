import { ReactElement } from "react";
import { Link } from "react-router-dom";

import { Book } from "../../utils/types";
import { Paths } from "../../utils/types";

interface Props {
	book: Book;
}

const ProductCard = ({ book }: Props): ReactElement => {
	return (
		<div className="w-full h-full max-w-md md:max-w-sm min-h-[25rem] max-h-[32rem] m-auto md:m-0 rounded-lg shadow-lg overflow-hidden cursor-pointer">
			<Link to={`${Paths.Products}/${book.id}`}>
				<div className="h-4/5 flex justify-center p-4 bg-gray-200">
					<img
						className="w-48 h-54 object-contain"
						src={book.coverImage}
						alt={book.title}
					/>
				</div>
				<div className="h-1/5 px-6 pt-2 pb-12">
					<div className="flex justify-between items-center">
						<h3 className="py-1 font-lora text-xl">{book.title}</h3>
						<p className="font-lora text-lg text-primary">{`$${Math.ceil(
							book.price
						)}`}</p>
					</div>
					<p className="italic text-gray-600">By {book.author.name}</p>
				</div>
			</Link>
		</div>
	);
};

export default ProductCard;
