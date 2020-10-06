import { InputGroup, FormControl, Button } from "react-bootstrap";
import styles from "./SearchBar.module.css";

const SearchBar = ({ value, onChange, onClick, onKeyPress }) => {
  return (
    <div className={styles.searchBar}>
      <InputGroup>
        <FormControl
          placeholder="Search..."
          aria-label="Search..."
          aria-describedby="basic-addon2"
          onChange={onChange}
          value={value}
          onKeyPress={onKeyPress}
        />
        <InputGroup.Append>
          <Button onClick={onClick} variant="secondary">
            Search
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

export default SearchBar;
