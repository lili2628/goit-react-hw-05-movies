import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'services/API';
import { Card } from 'components/Card/Card';
//import { BackLink, AddInfo, Container } from './MovieDetails.styled';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
      getMovieDetails(movieId)
          .then(({ results }) => {
                setMovieDetails(results);
           })
           .catch(error => {
                console.log(error);
           });
  }, [movieId]);

  if (!movieDetails) {
    return null;
    };

  const backLink = location.state?.from ?? '/';

  return (
    <>
      <BackLink to={backLink}>← Go back</BackLink>
      <MovieCard movie={movieDetails} />
      <Container>
        <AddInfo to={'cast'} state={{ from: backLink }}>
          Cast
        </AddInfo>
        <AddInfo to={'reviews'} state={{ from: backLink }}>
          Reviews
        </AddInfo>
      </Container>

      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};