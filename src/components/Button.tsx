import { ReactElement } from "react";
import classNames from "classnames";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const defaultStyles = `px-4 py-2 bg-primary capitalize text-lg text-white rounded
	active:shadow-lg transition duration-150 ease-in-out shadow-md hover:bg-primary/90 hover:shadow-lg`;

const Button = (props: Props): ReactElement => {
	const { children, className = "", ...otherProps } = props;
	return (
		<button
			className={classNames(defaultStyles, { [className]: className })}
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default Button;
