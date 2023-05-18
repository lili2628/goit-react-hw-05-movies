import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../services/API';
import MovieList from 'components/MovieList/MovieList';


function Home() {
 const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);

  return (
    <>
      <MovieList movies={movies} />
    </>
  );
}

export default Home;