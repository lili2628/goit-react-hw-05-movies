import { useNavigate, useSearchParams } from "react-router-dom";
import { getMovies } from "../../services/API";
import { MovieList } from "../components/ProductList";

const Movies = () => {
    const movies = getMovies();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const movieId = searchParams.get("id");
    const movieName = searchParams.get("name") ?? "";

    const visibleMovies = movies.filter((movie) => movie.name.toLowerCase().includes(movieName.toLocaleLowerCase));

    const updateQueryString = (name) => {
        const nextParams = name !== "" ? { name } : {};
        setSearchParams(nextParams);
    }
    

    return (
        <main>
            <input 
                type="text"
                value={movieName}
                onChange={updateQueryString}
            />
        <MovieList movies={visibleMovies} />
        </main>
    );
};


export default Movies;