import React from "react";
import "./styles/MovieModal.css";

const MovieModal = ({ movie, closeModal }) => {
    if (!movie) return null;

    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="model-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={closeModal}>X</button>
                <img src={movie.poster} alt={movie.title} />

                <div className="model-info">
                    <h2>{movie.title} ({movie.year})</h2>
                    <p>Rating: {movie.rating}</p>
                    <p>{movie.overview}</p>
                    <button className="model-action-btn">Watch Trailer</button>
                </div>
            </div>
        </div>
    );
};

export default MovieModal;