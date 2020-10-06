import { Alert, Button, ProgressBar } from "react-bootstrap";

const Pagination = ({ onClick, total, current }) => {
  return (
    <>
      <Alert variant="success">
        Displaying {current} out of {total} characters
      </Alert>
      <ProgressBar animated now={current} max={total} />
      <Button onClick={onClick} block variant="info">
        Load more results
      </Button>
    </>
  );
};

export default Pagination;
