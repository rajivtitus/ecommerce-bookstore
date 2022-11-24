import { ReactElement } from "react";

import Layout from "../components/Layout";

const ErrorPage = (): ReactElement => {
	return (
		<Layout>
			<div className="py-16 text-center">
				<h3 className="mb-8 text-2xl ">
					Oops! An unexpected error has occured, please try again later.
				</h3>
			</div>
		</Layout>
	);
};

export default ErrorPage;
