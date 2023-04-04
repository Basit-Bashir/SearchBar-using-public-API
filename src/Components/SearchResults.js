import React from "react";
import "./SearchResult.css";
import SearchResult from "./SearchResult";
const SearchResults = ({ result }) => {
  return (
    <div className="result-list">
      {result.map((results, id) => {
        return <SearchResult results={results} key={id} />;
      })}
    </div>
  );
};
export default SearchResults;
