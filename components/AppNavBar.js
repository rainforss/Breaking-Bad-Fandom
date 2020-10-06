import { useRouter } from "next/router";
import { Navbar } from "react-bootstrap";
import styles from "./AppNavBar.module.css";

const AppNavbar = () => {
  const router = useRouter();
  return (
    <Navbar
      bg="transparent"
      variant="dark"
      className="d-flex justify-content-center py-5"
      style={{ zIndex: 10 }}
    >
      <Navbar.Brand
        onClick={() => router.push("/spinoff")}
        className="mr-0"
        style={router.pathname === "/" ? {} : { display: "none" }}
      >
        <img alt="" src="/logo.png" className={styles.logo} />
      </Navbar.Brand>
      <Navbar.Brand
        onClick={() => router.push("/")}
        className="mr-0"
        style={router.pathname === "/spinoff" ? {} : { display: "none" }}
      >
        <img alt="" src="/bcs.svg.png" className={styles.logo} />
      </Navbar.Brand>
    </Navbar>
  );
};

export default AppNavbar;
