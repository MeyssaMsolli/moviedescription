import React from "react";
import { useParams, Link } from "react-router-dom";

const MovieDescriptions = ({ movies }) => {
  const { movieId } = useParams();
  const movies = [
  {
    id: 1,
    title: "Mako Mermaids",
    description: "This is the description for Mako Mermaids.",
    trailerLink: "https://www.youtube.com/watch?v=D-MhREHvQ70",

    id: 2,
    title: "Winx Club",
    description: "This is the description for Winx Club.",
    trailerLink: "https://www.youtube.com/watch?v=LfNiC9XiKTU"
  },
];
// we can add more videos with same methode...//
  const movie = movies.find(movie => movie.id === parseInt(movieId));

  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerLink}
        title={`${movie.title} Trailer`}
        allowFullScreen
      ></iframe>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MovieDescriptions;


