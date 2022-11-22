import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Paths } from "./utils/types";
import Home from "./routes/Home";
import Products from "./routes/Products";
import Cart from "./routes/Cart";
import ProductDetails from "./routes/ProductDetails";
import ErrorPage from "./routes/ErrorPage";
import { useAppDispatch } from "./app/hooks";
import { fetchBooks } from "./features/books/booksSlice";

function App() {
	const dispatch = useAppDispatch();
	const router = createBrowserRouter([
		{
			path: Paths.Home,
			element: <Home />,
		},
		{
			path: Paths.Products,
			element: <Products />,
		},
		{
			path: Paths.Cart,
			element: <Cart />,
		},
		{
			path: Paths.ProductDetails,
			element: <ProductDetails />,
		},
		{
			path: Paths.Other,
			element: <ErrorPage />,
		},
	]);

	useEffect(() => {
		dispatch(fetchBooks());
	}, []);

	return <RouterProvider router={router} />;
}

export default App;
