import axios from "axios";
import useUserStore from "../store/userStore";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "35ea889947e41d5818fff53ecbb4896f",
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

export const fetchMovieReviews = async (movieId) => {
  const token = useUserStore.getState().token;
  const response = await api.get(`http://localhost:8000/reviews/${movieId}`, {
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
    },
  });
  return response.data;
};
