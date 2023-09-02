import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

import "../../assets/styles/movie-description-file.css"; // Import your CSS file with the play-button class
import Description from "../../pages/description";

function MovieDescription() {
  const [imageLoading, setImageLoading] = useState(true);

  const movie = {
    title: "Movie 1",
    time: "1h48",
    imageURL:
      "https://m.media-amazon.com/images/M/MV5BODRlNTY5ZjktZjE0Ni00YjZhLTk3NTItYzk0ZjYxN2QxMWEzXkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_.jpg",
    synopsis:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    person1: "person1",
    person2: "person2",
    person3: "person3",
    person4: "person4",
    genre: "action, familial",
    rate: "80%",
    duration: "1h48",
  };

  return (
    <div className="first-part-description">
      <div
        className="container-sm::before"
        style={{
          content: `url("${movie.imageURL}")`,
          filter: "blur(70px)",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "70%",
          zIndex: -1,
        }}
      ></div>
      <div className="texts" style={{ flex: 1, marginTop: "4rem" }}>
        <h2 className="text-white">{movie.title}</h2>
        <p className="text-white">{movie.synopsis}</p>
      </div>
      <div className="image" style={{ flex: 1 }}>
        <img
          src={movie.imageURL}
          style={{
            height: "40rem",
            width: "25rem",
            borderRadius: "5px",
          }}
        />
      </div>
    </div>
  );
}

export default MovieDescription;
