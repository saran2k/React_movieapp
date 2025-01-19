import React, { useState } from 'react';
import moviesData from '../movies';  // Importing the movies array
import '../App.css';

const MovieList = ({ language, genre }) => {
  // Initialize state with movies, setting the initial stock to 1 for each movie
  const [movies, setMovies] = useState(
    moviesData.map(movie => ({
      ...movie,
      numberInStock: 1,  // Set initial stock to 1
    }))
  );

  // Filter movies based on selected language and genre
  const filteredMovies = movies.filter((movie) => 
    (movie.language === language) && (genre ? movie.genre.name === genre : true)
  );

  // Function to update stock and rental rate of a specific movie
  const updateStockAndRate = (id, operation) => {
    setMovies((prevMovies) => 
      prevMovies.map((movie) => 
        movie._id === id
          ? {
              ...movie,
              numberInStock: operation === 'increase' 
                ? movie.numberInStock + 1 
                : movie.numberInStock > 1 ? movie.numberInStock - 1 : 1, // Prevent stock from going below 1
            }
          : movie
      )
    );
  };

  return (
    <div className="movie-list-container">
      {/* Movie list display */}
      <div className="movie-list">
        {filteredMovies.length === 0 ? (
          <div>No movies found for the selected language and genre.</div>
        ) : (
          filteredMovies.map((movie) => (
            <div key={movie._id} className="movie-card">
              <h3>{movie.title}</h3>
              <p>Genre: {movie.genre.name}</p>
              <p>Language: {movie.language}</p>
              <p>Seats Booked: {movie.numberInStock}</p>
              <p>Total Rental Price: ${(movie.dailyRentalRate * movie.numberInStock).toFixed(2)}</p> {/* Dynamic total rental price */}
              {/* Plus and Minus buttons for stock and rental rate adjustment */}
              <button onClick={() => updateStockAndRate(movie._id, 'increase')}>+</button>
              <button onClick={() => updateStockAndRate(movie._id, 'decrease')}>-</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MovieList;
