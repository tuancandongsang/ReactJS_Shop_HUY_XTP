import SearchIcon from "@mui/icons-material/Search";
import React from "react";

Search.propTypes = {};

function Search(props) {
  return (
    <div className="pointer mr-10" style={{ display: "inline-block" }}>
      <SearchIcon />
    </div>
  );
}

export default Search;
