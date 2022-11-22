import { mockBooks } from "../utils/mocks";
import { Book } from "../utils/types";

const getBooks = (): Promise<Book[]> => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(mockBooks);
		}, 500);
	});
};

export default getBooks;
