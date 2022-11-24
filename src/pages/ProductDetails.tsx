import { ReactElement } from "react";
import { useParams } from "react-router-dom";

import Layout from "../components/Layout";
import ProductInfo from "../components/ProductDetails/ProductInfo";
import { useAppSelector } from "../app/hooks";

type ProductParams = {
	id?: string;
};

const ProductDetails = (): ReactElement => {
	const { id } = useParams<ProductParams>();
	const book = useAppSelector(
		(state) => state.products.books.filter((book) => book.id === Number(id))[0]
	);

	return <Layout>{book && <ProductInfo book={book} />}</Layout>;
};

export default ProductDetails;
