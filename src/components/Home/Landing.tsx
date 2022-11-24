import { ReactElement } from "react";
import { Link } from "react-router-dom";

import { Paths } from "../../utils/types";

import coverImg from "../../assets/hero-img.png";
import Button from "../Button";
import Heading from "../Heading";

const Landing = (): ReactElement => {
	return (
		<div className="flex items-center justify-center h-[calc(100vh-200px)] bg-lightGray rounded">
			<div className="w-7/12 px-12 xl:px-20 2xl:px-32">
				<h2 className="mb-6 text-4xl font-lora leading-8">
					The best e-commerce bookstore!
				</h2>
				<p className="mb-8 text-lg text-darkGray leading-8">
					A good bookshop is not just about selling books from shelves, but
					reaching out into the world and making a difference.
					<span className="block italic">~ David Almond</span>
				</p>
				<Link to={Paths.Products}>
					<Button>explore now</Button>
				</Link>
			</div>
			<div className="w-5/12">
				<img
					className="w-full h-[28rem] xl:max-w-lg xl:h-[35rem]"
					src={coverImg}
					alt="store cover"
				/>
			</div>
		</div>
	);
};

export default Landing;
