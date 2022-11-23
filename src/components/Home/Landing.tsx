import { ReactElement } from "react";
import { Link } from "react-router-dom";

import { Paths } from "../../utils/types";

const Landing = (): ReactElement => {
	return (
		<div className="flex justify-center items-center h-full">
			<div className="text-center">
				<h2 className="mb-6 text-4xl font-lora leading-8">
					Bookworm : The best e-commerce bookstore!
				</h2>
				<p className="px-36 mb-8 text-lg text-darkGray leading-8">
					A good bookshop is not just about selling books from shelves, but
					reaching out into the world and making a difference.
					<span className="text-right block italic">~ David Almond</span>
				</p>
				<Link to={Paths.Products}>
					<button className="px-4 py-2 bg-primary text-lg text-white rounded">
						Explore Now
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Landing;
