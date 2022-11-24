import { ReactElement } from "react";

import Layout from "../components/Layout";
import { useAppSelector } from "../app/hooks";
import ProductCard from "../components/Products/ProductCard";

const Products = (): ReactElement => {
  const books = useAppSelector((state) => state.products.books);

  return (
    <Layout>
      <h2 className="py-2 mb-8 text-center font-lora text-3xl">Products</h2>
      {books.length ? (
        <div className="grid grid-cols-2 content-center xl:grid-cols-3 gap-16 px-6 pb-12">
          {books.map((book) => (
            <ProductCard book={book} key={book.id} />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center">
          <h4 className="mb-8 text-2xl ">
            No products found, please try again later.
          </h4>
        </div>
      )}
    </Layout>
  );
};

export default Products;
