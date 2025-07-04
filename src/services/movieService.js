import axios from "axios";
import useUserStore from "../store/userStore";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNWVhODg5OTQ3ZTQxZDU4MThmZmY1M2VjYmI0ODk2ZiIsIm5iZiI6MTcwNjU5NzgzNy45NTksInN1YiI6IjY1Yjg5ZGNkOGMzMTU5MDE3YmYxZTM3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WcE_JUsUwqV2hoXMmaH-0dNMV9a3g3K6cmoxuLeKKoY",
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
  const response = await api.get(
    `http://localhost:8000/api/reviews/${movieId}`,
    {
      headers: {
        Authorization: token ? `Bearer ${token}` : undefined,
      },
    }
  );
  return response.data;
};

export const searchMovies = async (query, page = 1) => {
  if (!query || query.trim().length === 0) {
    return { results: [], total_results: 0, total_pages: 0 };
  }

  const response = await api.get("/search/movie", {
    params: {
      query: query.trim(),
      page: page,
    },
  });

  return response.data;
};
