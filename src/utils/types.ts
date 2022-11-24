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
