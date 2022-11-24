import { ReactNode, RefObject } from "react";

export interface Book {
  id: number;
  title: string;
  author: {
    name: string;
    image: string;
    bio: string;
  };
  price: number;
  description: string;
  coverImage: string;
}
export interface CartItem extends Book {
  quantity: number;
}

export interface NavLink {
  name: string;
  path: string;
}

export enum Paths {
  Home = "/",
  Cart = "/cart",
  Products = "/products",
  ProductDetails = "products/:id",
  Other = "*",
}

export enum NavItems {
  Home = "Home",
  Products = "Products",
  Cart = "Cart",
}

export type ToastProps = {
  id: number;
  type?: "success" | "info" | "error";
  message?: ReactNode;
  duration?: number;
  position?: ToastPositionType;
  icon?: ReactNode | boolean;
};

export type ToastPositionType =
  | "topLeft"
  | "topCenter"
  | "topRight"
  | "bottomRight"
  | "bottomCenter"
  | "bottomLeft";

export type RequiredToastProps = Required<ToastProps>;

export type ToastContextType = {
  addToast: (toast: Omit<ToastProps, "id">) => void;
  removeToast: (toastId: number, ref: RefObject<HTMLDivElement>) => void;
  position: ToastPositionType;
};

export const positionClasses: Record<ToastPositionType, string> = {
  topRight: "top-0 right-1",
  topCenter: "top-0 right-1/2 translate-x-1/2",
  topLeft: "top-0 left-1",
  bottomLeft: "bottom-0 left-1",
  bottomCenter: "bottom-0 right-1/2 translate-x-1/2",
  bottomRight: "bottom-0 right-1",
};
