import { ReactElement } from "react";

import Layout from "../components/Layout";
import Featured from "../components/Home/Featured";
import Landing from "../components/Home/Landing";

const Home = (): ReactElement => {
	return (
		<Layout>
			<h1 className="py-2 text-center font-lora text-3xl">Bookworm</h1>
			<Landing />
			<Featured />
		</Layout>
	);
};

export default Home;
