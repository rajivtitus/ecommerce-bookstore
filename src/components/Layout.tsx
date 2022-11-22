import { ReactElement } from "react";
import Navbar from "./Navbar";

interface Props {
	children: ReactElement | ReactElement[];
}

const Layout = ({ children }: Props): ReactElement => {
	return (
		<div className="max-w-screen-2xl m-auto h-screen">
			<Navbar />
			<div className="p-6">{children}</div>
		</div>
	);
};

export default Layout;
