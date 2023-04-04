import React from "react";
import "./SearchResults.css";
const SearchResult = ({ results }) => {
  return <div className="search-result">{results.name}</div>;
};
export default SearchResult;
