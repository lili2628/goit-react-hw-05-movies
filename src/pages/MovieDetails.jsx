import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, useLocation, Link, NavLink } from 'react-router-dom';
import { getMovieDetails } from 'services/API';
import Card from 'components/Card/Card';

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
      <Link to={backLink}>← Go back</Link>
      <Card movie={movieDetails} />
      <>
        <NavLink to={'cast'} state={{ from: backLink }}>
          Cast
        </NavLink>
        <NavLink to={'reviews'} state={{ from: backLink }}>
          Reviews
        </NavLink>
      </>

      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};