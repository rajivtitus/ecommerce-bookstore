import { ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";

import { NavItems, Paths } from "../utils/types";

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
    <nav className="px-8 py-3 mb-4 bg-lightGray">
      <ul className="flex ">
        {NAV_ITEMS.map((link, index) => (
          <li
            key={index}
            className="px-2 pb-1 mr-12 text-lg font-lora relative cursor-pointer"
          >
            <Link to={link.path}>{link.name}</Link>
            <span
              className={
                pathname === link.path
                  ? `bg-primary absolute h-[2px] w-full bottom-0 left-0`
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
