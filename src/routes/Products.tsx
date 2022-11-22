import { ReactElement } from "react";

import Layout from "../components/Layout";
import { useAppSelector } from "../app/hooks";
import ProductCard from "../components/Products/ProductCard";

const Products = (): ReactElement => {
	const books = useAppSelector((state) => state.products.books);

	return (
		<Layout>
			<div className="grid grid-cols-1 gap-16 px-6 pb-12 md:grid-cols-2 lg:grid-cols-3">
				{books.map((book) => (
					<ProductCard book={book} key={book.id} />
				))}
			</div>
		</Layout>
	);
};

export default Products;
