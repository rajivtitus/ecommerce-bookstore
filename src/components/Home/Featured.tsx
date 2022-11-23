import { ReactElement } from "react";

import { getMonthName } from "../../utils/helpers";

const Featured = (): ReactElement => {
	const author = null;
	const currMonth = getMonthName();

	return (
		<div className="min-h-screen py-4">
			<h2 className="py-2 mb-8 font-lora text-3xl">
				{currMonth}'s Featured Author
			</h2>
			{author ? (
				<div>
					<p>Author exists</p>
				</div>
			) : (
				<div className="py-16 text-center">
					<h4 className="mb-8 text-2xl ">
						No authors found, please try again later.
					</h4>
				</div>
			)}
		</div>
	);
};

export default Featured;
