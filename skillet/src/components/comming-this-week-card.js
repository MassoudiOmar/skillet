import React, { useState } from "react";
import Carousel from "react-grid-carousel";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "../assets/styles/arrow.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CommingThisWeekMovies() {
  const [imageLoading, setImageLoading] = useState(true);

  const movies = [
    {
      title: "Movie 1",
      time: "1h48",
      imageURL: "https://picsum.photos/800/600?random=1",
    },
    {
      title: "Movie 2",
      time: "4:30 PM",
      imageURL: "https://picsum.photos/800/600?random=2",
    },
    {
      title: "Movie 3",
      time: "7:00 PM",
      imageURL: "https://picsum.photos/800/600?random=3",
    },
    {
      title: "Movie 3d",
      time: "7:00 PM",
      imageURL: "https://picsum.photos/800/600?random=4",
    },
    {
      title: "Movie 3d",
      time: "7:00 PM",
      imageURL: "https://picsum.photos/800/600?random=5",
    },
    {
      title: "Movie 3d",
      time: "7:00 PM",
      imageURL: "https://picsum.photos/800/600?random=6",
    },
    {
      title: "Movie 3q",
      time: "7:00 PM",
      imageURL: "https://picsum.photos/800/600?random=7",
    },
    {
      title: "Movie 3f",
      time: "7:00 PM",
      imageURL: "https://picsum.photos/800/600?random=8",
    },
    {
      title: "Movie 3f",
      time: "7:00 PM",
      imageURL: "https://picsum.photos/800/600?random=9",
    },
    {
      title: "Movie 3f",
      time: "7:00 PM",
      imageURL: "https://picsum.photos/800/600?random=10",
    },
    {
      title: "Movie 3f",
      time: "7:00 PM",
      imageURL: "https://picsum.photos/800/600?random=11",
    },
    {
      title: "Movie 3f",
      time: "7:00 PM",
      imageURL: "https://picsum.photos/800/600?random=12",
    },
    // Add more movies as needed
  ];
  return (
    <>
      <div className="title-card mt-5">A l'affiche cette semaine</div>

      <Carousel cols={6} rows={1} gap={10} loop style={{ width: "600px" }}>
        {movies.map((movie, index) => {
          return (
            <Carousel.Item key={index}>
              {movie.imageURL?(
                <img
                  style={{ borderRadius: "5px" }}
                  height="220px"
                  width="155px"
                  src={movie.imageURL}
                  alt={movie.title}
                />
              ) : <Skeleton height={220} width={155} />}
              <div>
                {movie.title ? (
                  <h3 className="movie-title">{movie.title}</h3>
                ) : (
                  <Skeleton width={120} height={15} borderRadius={50} />
                )}
                <p
                  style={{ color: "grey", fontSize: "1rem" }}
                >{`${movie.time}`}</p>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}

export default CommingThisWeekMovies;
