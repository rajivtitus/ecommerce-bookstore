import { ReactElement } from "react";
import { Link } from "react-router-dom";

import { Book } from "../../utils/types";
import { Paths } from "../../utils/types";
import Heading from "../Heading";

interface Props {
	book: Book;
}

const ProductCard = ({ book }: Props): ReactElement => {
	return (
		<div className="w-full h-full max-w-md min-h-[25rem] max-h-[32rem] m-auto rounded-lg shadow-lg overflow-hidden cursor-pointer">
			<Link to={`${Paths.Products}/${book.id}`}>
				<div className="h-4/5 flex justify-center p-4 bg-medGray">
					<img
						className="w-48 h-54 object-contain"
						src={book.coverImage}
						alt={book.title}
					/>
				</div>
				<div className="h-1/5 px-6 pt-2 pb-12">
					<div className="flex justify-between items-center">
						<h3 className="py-1 font-lora text-xl">{book.title}</h3>
						<p className="font-lora text-lg">{`$${Math.ceil(book.price)}`}</p>
					</div>
					<p className="italic text-darkGray">By {book.author.name}</p>
				</div>
			</Link>
		</div>
	);
};

export default ProductCard;
