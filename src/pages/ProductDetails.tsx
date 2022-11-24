import { ReactElement } from "react";
import { useParams } from "react-router-dom";

import Layout from "../components/Layout";
import ProductInfo from "../components/ProductDetails/ProductInfo";
import { useAppSelector } from "../app/hooks";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorPage from "./ErrorPage";

type ProductParams = {
	id?: string;
};

const ProductDetails = (): ReactElement => {
	const { id } = useParams<ProductParams>();
	const { books, isLoading } = useAppSelector((state) => state.products);
	const book = books.filter((book) => book.id === Number(id))[0];

	return (
		<Layout>
			{!isLoading ? (
				book ? (
					<ProductInfo book={book} />
				) : (
					<div className="py-16 text-center">
						<h4 className="mb-8 text-2xl ">
							No product found, please try again later.
						</h4>
					</div>
				)
			) : (
				<LoadingSpinner />
			)}
		</Layout>
	);
};

export default ProductDetails;
