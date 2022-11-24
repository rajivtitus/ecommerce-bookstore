import { ReactElement } from "react";
import { Link } from "react-router-dom";

import { getMonthName } from "../../utils/helpers";
import { useAppSelector } from "../../app/hooks";
import { Paths } from "../../utils/types";
import Heading from "../Heading";
import AlternateText from "../AlternateText";

const Featured = (): ReactElement => {
	//In a real world scenario we would have multiple books from an author,
	//we would then filter by author name and retrieve their books
	const book = useAppSelector((state) => state.products.books)[0];
	const currMonth = getMonthName();

	return (
		<div className="min-h-screen py-4">
			<Heading
				className="my-8"
				size="3xl"
				component="h2"
				text={`${currMonth}'s Featured Author`}
			/>

			{book ? (
				<div>
					<div className="h-14 bg-lightGray rounded relative">
						<Heading
							className="ml-48"
							component="h3"
							size="2xl"
							text={book.author.name}
						/>
						<img
							className="w-40 h-40 rounded-full absolute top-4 left-4 border-solid border-medGray border-4"
							src={book.author.image}
							alt="Rounded avatar"
						/>
					</div>

					<p className="ml-48 mb-8 p-2 leading-7 whitespace-pre-line">
						{book.author.bio}
					</p>

					<Heading
						className="mb-2"
						component="h3"
						size="2xl"
						text={`Books By ${book.author.name}`}
					/>
					<hr className="mb-8 font-bold h-4" />
					<div className="flex">
						<div className="min-w-[350px] max-w-[400px] mx-auto h-[25rem] w-2/5 px-12">
							<img className="rounded" src={book.coverImage} alt={book.title} />
						</div>
						<div>
							<Heading
								className="mb-2"
								component="h4"
								size="xl"
								text={book.title}
							/>
							<p className="mb-6 leading-7 whitespace-pre-line">
								{book.description.length > 500
									? book.description.substring(0, 500) + "..."
									: book.description}
							</p>
							<p>
								Interested?
								<Link to={`${Paths.Products}/${book.id}`}>
									<span className="text-primary underline cursor-pointer">
										{" "}
										Click this link{" "}
									</span>
								</Link>
								to know more.
							</p>
						</div>
					</div>
				</div>
			) : (
				<AlternateText text="No authors found, please try again later." />
			)}
		</div>
	);
};

export default Featured;
