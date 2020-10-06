import AppNavBar from "./AppNavBar";
import Head from "next/head";
import styles from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className="position-relative">
      <Head>
        <title>The Breaking Bad Universe</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous"
        />
      </Head>
      <AppNavBar />
      {props.children}
    </div>
  );
};

export default Layout;
