import React from "react";

const MovieCard = ({ movie }) => {
  return (
          <div className='movie'>
          <div>
          <p> {movie.Year} </p>
          </div>
          <div>
            <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
          </div>
          <div className="display-movie">
            <span> {movie.Type} </span>

            <h3> {movie.Title} </h3>
            <button className="watch-now"><a href= {movie.link}>Watch now</a></button>
          </div>
          </div>
  );
}

export default MovieCard;