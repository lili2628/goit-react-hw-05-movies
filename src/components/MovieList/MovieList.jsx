import { useLocation } from 'react-router-dom';
import { List, MovieItem, MovieLink, MovieImg, MovieName } from './MovieList.styled';
import PropTypes from 'prop-types';

function MovieList ({ movies }) {
  const location = useLocation();
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';
  const noImage = 'https://endlessicons.com/wp-content/uploads/2012/11/image-holder-icon-614x460.png';

  return (
    <>
      <List>
        {movies.map(({ id, title, original_name, poster_path }) => { 
          if (poster_path) {
            return (
              <MovieItem key={id}>
                <MovieLink to={`/movies/${id}`} state={{ from: location }}>
                  <MovieImg src={imgBaseUrl.concat(poster_path)} alt="" />
                  <MovieName>{title ?? original_name}</MovieName>
                </MovieLink>
              </MovieItem>
            );
          } else {
            return (
              <MovieItem key={id}>
                <MovieLink to={`/movies/${id}`} state={{ from: location }}>
                  <MovieImg src={noImage} alt="" />
                  <MovieName>{title ?? original_name}</MovieName>
                </MovieLink>
              </MovieItem>
            );
        }
        })}
        </List>
      </>
  );
}

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    original_name: PropTypes.string,
    poster_path: PropTypes.string,
  })),
};