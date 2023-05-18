import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'services/API';
import SearchBar from 'components/SearchBar';
import MovieList from 'components/MovieList';

function Movies() {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const query = searchParams.get('query') ?? '';
        
        if (!query) return;
  
        searchMovies(query)
            .then(({ results }) => {
                if (results.length === 0) {
                    console.log('error');
                    return;
                }
                setMovies(results);
            })
            .catch(error => {
                console.log(error);
            });
    }, [searchParams]);

    const onInputChange = e => {
        setQuery(e.target.value);
    }

    const onFormSubmit = e => {
        e.preventDefault();

        setSearchParams(query !== '' ? { query } : {});
    };

    return (
        <>
            <SearchBar onSubmit={onFormSubmit} onChange={onInputChange} />
            <MovieList movies={movies} />
        </>
    );
    
      
};

export default Movies;