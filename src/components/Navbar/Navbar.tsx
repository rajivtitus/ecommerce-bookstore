import { ReactElement } from "react";
import { useLocation } from "react-router-dom";

import { NavItems, NavLink, Paths } from "../../utils/types";
import NavItem from "./NavItem";
import { useAppSelector } from "../../app/hooks";
import { calcCartQuantity } from "../../utils/helpers";

const NAV_ITEMS: NavLink[] = [
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
  const cartItems = useAppSelector((state) => state.checkout.cart);
  const totalCount = calcCartQuantity(cartItems);

  return (
    <nav className="px-8 py-3 mb-4 bg-lightGray">
      <ul className="flex ">
        {NAV_ITEMS.map((link, index) => (
          <NavItem
            link={link}
            path={pathname}
            cartCount={totalCount}
            key={index}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
