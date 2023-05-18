import { useLocation } from 'react-router-dom';
import {List, MovieItem, MovieLink, MovieImg, MovieName} from './MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';

  return (
    <List>
      {movies.map(({ id, title, original_name, poster_path }) => (
        <MovieItem key={id}>
          <MovieLink to={`/movies/${id}`} state={{ from: location }}>
            <MovieImg src={imgBaseUrl.concat(poster_path)} alt="" />
            <MovieName>{title ?? original_name}</MovieName>
          </MovieLink>
        </MovieItem>
      ))}
    </List>
  );
};

export default MovieList;