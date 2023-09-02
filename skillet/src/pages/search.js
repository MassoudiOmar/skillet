import React from "react";

import SearchCard from "../components/search-card";
import "../assets/styles/title-card.css";
import "../assets/styles/search-page.css";

function Search() {
  const headingStyle = {
    fontSize: "50px",
    color: "white",
  };

  const resultStyle = {
    fontSize: "35px",
    color: "white",
  };

  return (
    <div className="search-page">
      <div>
      
        <SearchCard />
      </div>
    </div>
  );
}

export default Search;
