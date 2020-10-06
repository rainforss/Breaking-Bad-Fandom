import { Alert, Button, ProgressBar } from "react-bootstrap";

const Pagination = ({
  onClick,
  total,
  current,
  isLoadingMore,
  isReachingEnd,
}) => {
  return (
    <div className="w-75 mx-auto my-5">
      <Alert
        className="text-center"
        style={{ fontSize: "0.9rem" }}
        variant="dark"
      >
        Displaying {current} out of {total} characters
        <ProgressBar animated now={current} max={total} className="mt-3" />
      </Alert>

      <Button
        onClick={onClick}
        block
        variant="info"
        disabled={isReachingEnd || isLoadingMore || current === total}
      >
        {isLoadingMore
          ? "Loading..."
          : isReachingEnd || current === total
          ? "No More Results"
          : "Load More Results"}
      </Button>
    </div>
  );
};

export default Pagination;
