const URL = 'https://api.themoviedb.org/3';
const BASE_KEY = '4c022d061e1dc709d01d1f05bf0b4752';

async function apiService(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(
        new Error('The resource you requested could not be found'),
      );
}

export function getTrendingMovies(page) {
  return apiService(
    `${URL}/trending/movie/day?api_key=${BASE_KEY}&page=${page}`,
  );
}

export function searchMovies(query) {
  return apiService(
    `${URL}/search/movie?api_key=${BASE_KEY}&query=${query}`,
  );
}

export function getMovieDetails(movieId) {
  return apiService(`${URL}/movie/${movieId}?api_key=${BASE_KEY}`);
}

export function getMovieCredits(movieId) {
  return apiService(`${URL}/movie/${movieId}/credits?api_key=${BASE_KEY}`);
}

export function getMovieReviews(movieId, page) {
  return apiService(
    `${URL}/movie/${movieId}/reviews?api_key=${BASE_KEY}&page=${page}`,
  );
}