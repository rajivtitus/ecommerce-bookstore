import { ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";

import { NavItems, Paths } from "../utils/constants";

const NAV_ITEMS = [
	{
		name: NavItems.Home,
		path: Paths.Home,
	},
	{
		name: NavItems.Products,
		path: Paths.Products,
	},
	{
		name: NavItems.Cart,
		path: Paths.Cart,
	},
];

const Navbar = (): ReactElement => {
	const { pathname } = useLocation();

	return (
		<nav>
			<ul className="flex p-4 mb-8">
				{NAV_ITEMS.map((link, index) => (
					<li
						key={index}
						className="px-2 pb-2 mr-12 text-lg font-lora relative cursor-pointer"
					>
						<Link to={link.path}>{link.name}</Link>
						<span
							className={
								pathname === link.path
									? `bg-primary absolute h-[3px] w-full bottom-0 left-0`
									: ""
							}
						/>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
