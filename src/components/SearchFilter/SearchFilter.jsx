import { TextField } from "@mui/material";

// import "./SearchFilter.scss";

export const SearchFilter = ({ searchTerm, setSearchTerm }) => {
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-filter">
      <br />
      <TextField
        value={searchTerm}
        onChange={handleChange}
        label="filter"
        variant="outlined"
      />
      <br />
      <br />
    </div>
  );
};
