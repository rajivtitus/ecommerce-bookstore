export interface Book {
	id: number;
	title: string;
	author: {
		name: string;
		image?: string;
	};
	price: number;
	description: string;
	coverImage: string;
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

export enum Status {
	Idle = "idle",
	Pending = "pending",
	Fulfilled = "fulfilled",
	Rejected = "rejected",
}
