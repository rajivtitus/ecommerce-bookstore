import { ReactElement, Component } from "react";

interface Props {
	text: string;
	children?: ReactElement | ReactElement[];
}

const AlternateText = ({ text, children }: Props): ReactElement => {
	return (
		<div className="py-16 text-center">
			<h4 className="mb-8 text-2xl ">{text}</h4>
			{children}
		</div>
	);
};

export default AlternateText;
