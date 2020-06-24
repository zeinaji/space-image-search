import React from "react";
import "../styles/SearchResults.css";

const SearchResults = ({ results }) => {
  return (
    <div className="search-image">
      {!results.length ? (
        <p>No results</p>
      ) : (
        results.map((result) => (
          <div className="image-container">
            <img
              key={results.indexOf(result)}
              src={result}
              alt="search-result"
              className="image-result"
            />
          </div>
        ))
      )}
    </div>
  );
};

export default SearchResults;
