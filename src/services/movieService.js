import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
  },
});

export const getMovies = async (sort, page = 1) => {
  const response = await api.get(`/movie/${sort}`, {
    params: {
      page: page,
    },
  });
  return response.data;
};

export const fetchTopMovies = async () => {
  const response = await api.get("/movie/popular", { params: { page: 1 } });
  return response.data.results.slice(0, 4);
};

export const fetchMovieById = async (movieId) => {
  const response = await api.get(`/movie/${movieId}`);
  return response.data;
};

export const fetchMovieVideo = async (movieId) => {
  const response = await api.get(`/movie/${movieId}/videos`);
  return response.data;
};

export const fetchMovieCredits = async (movieId) => {
  const response = await api.get(`/movie/${movieId}/credits`);
  return response.data;
};

export const fetchMovieRecommendations = async (movieId) => {
  const response = await api.get(`/movie/${movieId}/recommendations`);
  return response.data.results.slice(0, 4);
};
