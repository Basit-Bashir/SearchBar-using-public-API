import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
const SearchBar = ({ setResult }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((json) => {
        const result = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResult(result);
      });
  };

  const handleInput = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Start Typing..."
        value={input}
        onChange={(e) => handleInput(e.target.value)}
      />
    </div>
  );
};
export default SearchBar;
