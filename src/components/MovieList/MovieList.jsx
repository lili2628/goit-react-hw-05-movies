import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <Container>
      {movies.map((movie) => (
        <CardWrapper key={movie.id}>
          <Link to={`${movie.id}`} state={{ from: location }}>
            <img src="" alt="" />
            <ProductName>{movie.name}</ProductName>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};

export default MovieList;