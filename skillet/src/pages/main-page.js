import React from "react";
// import navbar for the main page
import Navbar from "../layouts/Navbar";
// import the carousel for the main page
import VerticalCarousel from "../components/carousel";
import "../assets/styles/title-card.css";
import CommingThisWeekMovies from "../components/comming-this-week-card";
import MostRatedMovies from "../components/most-rated-movies-card";
import "../assets/styles/main-page.css";

function MainPage() {
  return (
    <div className="container-sm my-4 custom-container">
      <div className="container-sm my-4 custom-container">
        <Navbar />
      </div>
      {/* Carousel Section */}
      <div className="carousel">
        <VerticalCarousel />
      </div>

      {/* Coming This Week Section */}
      <div className="row mt-5">
        <CommingThisWeekMovies />
      </div>

      {/* Most Rated Section */}
      <div className="row mt-5">
        <MostRatedMovies />
      </div>
    </div>
  );
}

export default MainPage;
