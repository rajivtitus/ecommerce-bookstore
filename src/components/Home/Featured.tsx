import { ReactElement } from "react";

import { getMonthName } from "../../utils/helpers";

const Featured = (): ReactElement => {
	const currMonth = getMonthName();

	return (
		<div className="min-h-screen py-4">
			<h2 className="py-2 mb-8 font-lora text-3xl">
				{currMonth}'s Featured Author
			</h2>
		</div>
	);
};

export default Featured;
