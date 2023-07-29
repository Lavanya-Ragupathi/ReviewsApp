import React from 'react';
import './Watchlist.css';
const Watchlist = ({ watchlist }) => {
  return (
    <div>
      <h3 className="watchlist-title">Watchlist</h3>
      <div className="watchlist-container">
        {watchlist.map((movie) => (
          <div key={movie.imdbId} className="watchlist-item">
            <img className="watchlist-poster" src={movie.poster} alt={movie.title} />
            <span className="watchlist-title">{movie.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watchlist;
