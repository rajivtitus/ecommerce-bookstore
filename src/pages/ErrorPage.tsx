import { ReactElement } from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

import Layout from "../components/Layout";

const ExpectedError = (error: any) => (
	<div>
		<h2>Oops!</h2>
		<p>{error.status}</p>
		<p>{error.statusText}</p>
		{error.data.message && <p>{error.data.message}</p>}
	</div>
);

const UnexpectedError = () => (
	<div>
		<h2>Oops!</h2>
		<p>An unexpected error has occured, please try again!</p>
	</div>
);

const ErrorPage = (): ReactElement => {
	const error = useRouteError();

	return (
		<Layout>
			{isRouteErrorResponse(error) ? <ExpectedError /> : <UnexpectedError />}
		</Layout>
	);
};

export default ErrorPage;
