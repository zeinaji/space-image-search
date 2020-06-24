import React, { useState } from "react";
import "../styles/Search.css";
import getImages from "../requests/getImages";

const Search = ({ setSearchResults }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const images = getImages(value);
    setSearchResults(images);
  };

  return (
    <div className="Search">
      <form className="form-wrapper" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="submit" type="submit">
          Go!
        </button>
      </form>
    </div>
  );
};

export default Search;
