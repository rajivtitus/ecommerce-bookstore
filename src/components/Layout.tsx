import { ReactElement } from "react";
import Navbar from "./Navbar";

interface Props {
	children: ReactElement | ReactElement[];
}

const Layout = ({ children }: Props): ReactElement => {
	return (
		<div className="max-w-screen-2xl m-auto min-h-screen">
			<Navbar />
			<div className="px-6 py-4 h-[calc(100vh-55px)]">{children}</div>
		</div>
	);
};

export default Layout;
