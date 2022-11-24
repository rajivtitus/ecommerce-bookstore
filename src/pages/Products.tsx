import { ReactElement } from "react";

import Layout from "../components/Layout";
import { useAppSelector } from "../app/hooks";
import ProductCard from "../components/Products/ProductCard";
import CardLoadingSkeleton from "../components/Products/CardLoadingSkeleton";
import Heading from "../components/Heading";
import AlternateText from "../components/AlternateText";

const Products = (): ReactElement => {
	const { books, isLoading } = useAppSelector((state) => state.products);
	const shadows = Array.from(Array(5), () => 0);

	return (
		<Layout>
			<Heading
				className="text-center mb-8"
				component="h2"
				text="Products"
				size="3xl"
			/>
			<div className="grid grid-cols-2 content-center xl:grid-cols-3 gap-20 px-6 pb-12">
				{!isLoading ? (
					books.length ? (
						books.map((book) => <ProductCard book={book} key={book.id} />)
					) : (
						<AlternateText text="No products found, please try again later." />
					)
				) : (
					shadows.map((shadow, index) => <CardLoadingSkeleton key={index} />)
				)}
			</div>
		</Layout>
	);
};

export default Products;
