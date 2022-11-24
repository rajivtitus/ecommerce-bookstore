import { ReactElement } from "react";
import AlternateText from "../components/AlternateText";

import Layout from "../components/Layout";

const ErrorPage = (): ReactElement => {
  return (
    <Layout>
      <AlternateText text="Oops! An unexpected error has occured, please try again later." />
    </Layout>
  );
};

export default ErrorPage;
