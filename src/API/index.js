import axios from 'axios';

const API_KEY = 'b4b59a799c6c994a741788cb06805fdc';
axios.defaults.baseURL = 'https://api.themoviedb.org/';

export async function fetchTrending() {
  const response = await axios('/3/trending/movie/day', {
    params: {
      api_key: API_KEY,
    },
  });

  return response.data;
}

export async function fetchMoviesByName(name) {
  const response = await axios('/3/search/movie', {
    params: {
      api_key: API_KEY,
      query: name,
      page: 1,
    },
  });
  return response.data;
}

export async function fetchMovieId(movieId) {
  const response = await axios(`/3/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
}

export async function fetchMovieCast(movieId) {
  const response = await axios(`/3/movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
}

export async function fetchMovieReviews(movieId) {
  const response = await axios(`/3/movie/${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
}
