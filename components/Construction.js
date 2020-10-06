import { Alert } from "react-bootstrap";
import styles from "./Construction.module.css";

const Construction = ({ target }) => {
  return (
    <Alert variant="danger" className="my-5 w-75 mx-auto">
      Some information and functions are not properly implemented yet because{" "}
      <Alert.Link href="#">{target}</Alert.Link> is still under construction
    </Alert>
  );
};

export default Construction;
