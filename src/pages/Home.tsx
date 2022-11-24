import { ReactElement } from "react";

import Layout from "../components/Layout";
import Featured from "../components/Home/Featured";
import Landing from "../components/Home/Landing";

import logo from "../assets/logo.png";

const Home = (): ReactElement => {
	return (
		<Layout>
			<header className="flex justify-center items-center gap-4 mb-6">
				<img src={logo} alt="logo" />
				<h1 className="py-2 text-center font-lora text-3xl">Bookworm</h1>
			</header>
			<Landing />
			<Featured />
		</Layout>
	);
};

export default Home;