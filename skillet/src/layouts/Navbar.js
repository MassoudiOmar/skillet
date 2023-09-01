import React from "react";
import "../assets/styles/title-text.css";

function Navbar() {
  return (
    <div className="mb-5" style={{ marginBottom: "20px" }}>
      {/* Search Bar and Carousel Title Row */}
      <div className="row">
        <div className="col d-flex align-items-center ">
          {/* Carousel Title */}
          <h2 className="title-text">MOVIENIGHT</h2>
        </div>
        <div className="col">
          {/* Search Bar */}
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search Movies..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
