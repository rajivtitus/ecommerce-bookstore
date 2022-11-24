import { ReactElement } from "react";

import Layout from "../components/Layout";
import Featured from "../components/Home/Featured";
import Landing from "../components/Home/Landing";

import logo from "../assets/logo.png";
import { useAppSelector } from "../app/hooks";
import LoadingSpinner from "../components/LoadingSpinner";
import Heading from "../components/Heading";

const Home = (): ReactElement => {
	const { isLoading } = useAppSelector((state) => state.products);

	return (
		<Layout>
			{!isLoading ? (
				<>
					<header className="flex justify-center items-center gap-4 mb-6">
						<img src={logo} alt="logo" />
						<Heading component="h1" size="3xl" text="Bookworm" />
					</header>
					<Landing />
					<Featured />
				</>
			) : (
				<LoadingSpinner />
			)}
		</Layout>
	);
};

export default Home;
