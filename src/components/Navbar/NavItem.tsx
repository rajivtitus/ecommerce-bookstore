import { ReactElement } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import { NavLink, Paths } from "../../utils/types";

interface Props {
  link: NavLink;
  path: string;
  cartCount: number;
}

const badgeStyles =
  "inline-flex absolute -top-2 -right-2 justify-center items-center w-4 h-4 text-xs font-bold text-white bg-secondary rounded-full";

const linkStyles = "bg-primary absolute h-[2px] w-full bottom-0 left-0";

const NavItem = ({ link, path, cartCount }: Props): ReactElement => {
  const isCart = link.path === Paths.Cart;

  return (
    <li className="px-2 pb-1 mr-12 text-lg font-lora relative cursor-pointer">
      {isCart && cartCount ? (
        <span className={classNames({ [badgeStyles]: isCart })}>
          {cartCount}
        </span>
      ) : null}
      <Link to={link.path}>{link.name}</Link>
      <span className={classNames({ [linkStyles]: link.path === path })} />
    </li>
  );
};

export default NavItem;
