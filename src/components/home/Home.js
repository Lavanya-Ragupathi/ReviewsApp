import React from 'react';
import Hero from '../hero/Hero';

const Home = ({ movies, addToWatchlist }) => {
  return <Hero movies={movies} addToWatchlist={addToWatchlist} />;
};

export default Home;
