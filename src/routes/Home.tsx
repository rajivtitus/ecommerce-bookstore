import { ReactElement } from "react";

import Layout from "../components/Layout";
import Featured from "../components/Home/Featured";
import Landing from "../components/Home/Landing";

const Home = (): ReactElement => {
	return (
		<Layout>
			<Landing />
			<Featured />
		</Layout>
	);
};

export default Home;
