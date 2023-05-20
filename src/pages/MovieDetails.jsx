import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, useLocation, Link } from 'react-router-dom';
import { getMovieDetails } from 'services/API';
import Card from 'components/Card/Card';
import { Box, Option } from './MovieDetails.styled';

function MovieDetails () {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMovieDetails(movieId)
      .then(setMovieDetails);
  }, [movieId]);

  if (!movieDetails) {
    return null;
    };

  const backLink = location.state?.from ?? '/';

  return (
    <>
      <Link to={backLink}>← Go back</Link>
      <Card movie={movieDetails} />
      <Box>
        <Option to={'cast'} state={{ from: backLink }}>
          Cast
        </Option>
        <Option to={'reviews'} state={{ from: backLink }}>
          Reviews
        </Option>
      </Box>

      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}

export default MovieDetails;