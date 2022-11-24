import { ReactElement } from "react";
import Navbar from "./Navbar/Navbar";

interface Props {
  children: ReactElement | ReactElement[];
}

const Layout = ({ children }: Props): ReactElement => {
  return (
    <div className={"max-w-screen-2xl min-h-screen m-auto"}>
      <Navbar />
      <div className="px-12 py-4 h-[calc(100vh-60px)]">{children}</div>
    </div>
  );
};

export default Layout;
