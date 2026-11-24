
import React from "react";
import "./styles/MovieCard.css";

const MovieCard = ({ movie, openModal }) => {
    return (
        <div className="movie-card" onClick={() => openModal(movie)}>
            <img src={movie.poster} alt={movie.title} />
            <h1>{movie.title}</h1>
            <p>{movie.rating}</p>
        </div>
    );
};

export default MovieCard;
