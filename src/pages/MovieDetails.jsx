import { useParams, Outlet, useLocation } from "react-router-dom";
import { getMovieById } from "../../services/API";

const MovieDetails = () => {
    const { movieId } = useParams();
    const movie = getMovieById(movieId);
    const location = useLocation();

    return (
        <div>
            <Link to={location.state?.from ?? "/movies"}>Back to movies</Link>
            <h2>
                Movie - {movie.name} - {movieId}
            </h2>;
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </div>
        
    );
};

export default MovieDetails;