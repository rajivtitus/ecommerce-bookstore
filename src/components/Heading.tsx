import { ReactElement } from "react";
import classNames from "classnames";

type CompType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type Size = "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";

interface Props {
	component: CompType;
	size: Size;
	text: string;
	className?: string;
	children?: ReactElement | ReactElement[];
}

const Heading = (props: Props): ReactElement => {
	const {
		component: Component,
		text,
		size,
		children,
		className = "",
		...otherProps
	} = props;
	const defaultStyles = `py-2 font-lora text-${size}`;

	return (
		<Component
			{...otherProps}
			className={classNames(defaultStyles, { [className]: className })}
		>
			{text}
			{children}
		</Component>
	);
};

export default Heading;
