import "./App.css";
import SearchBar from "./Components/SearchBar";
import React, { useState } from "react";
import SearchResults from "./Components/SearchResults";
function App() {
  const [result, setResult] = useState([]);
  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar setResult={setResult} />
        <SearchResults result={result} />
      </div>
    </div>
  );
}

export default App;
