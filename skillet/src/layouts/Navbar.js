import React from "react";
import "../assets/styles/title-text.css";
import SearchComponent from "../components/searchBar";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useNavigate } from "react-router-dom";

function Navbar() {
  return (
    <div
      class="navbar-container "
      style={{ display: "flex", justifyContent: "space-between" ,width:"61%"}}
    >
      <div className="navbar-content" style={{ flex: 1 }}>
        {/* Carousel Title */}
        <h2 className="title-text">MOVIENIGHT</h2>
      </div>
      <div className="navbar-content " style={{ flex: 1 }}>
        {/* Search Bar */}
        <div className="search">
          <SearchComponent />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
