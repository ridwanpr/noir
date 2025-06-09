import { useQuery } from "@tanstack/react-query";
import {
  getMovies,
  fetchTopMovies,
  fetchMovieById,
  fetchMovieVideo,
  fetchMovieCredits,
  fetchMovieRecommendations,
  fetchMovieReviews,
  searchMovies,
} from "../services/movieService";

export const useMovies = (sort, page) => {
  return useQuery({
    queryKey: ["movies", sort, page],
    queryFn: () => getMovies(sort, page),
    keepPreviousData: true,
    staleTime: 60000 * 5,
  });
};

export const useTopMovies = () => {
  return useQuery({
    queryKey: ["top-movies"],
    queryFn: () => fetchTopMovies(),
    staleTime: 60000 * 30,
  });
};

export const useMovie = (movieId) => {
  return useQuery({
    queryKey: ["movie", movieId],
    queryFn: () => fetchMovieById(movieId),
    staleTime: 60000 * 30,
  });
};

export const useMovieVideo = (movieId) => {
  return useQuery({
    queryKey: ["movie-video", movieId],
    queryFn: () => fetchMovieVideo(movieId),
    staleTime: 60000 * 60,
  });
};

export const useMovieCredits = (movieId) => {
  return useQuery({
    queryKey: ["movie-credits", movieId],
    queryFn: () => fetchMovieCredits(movieId),
    staleTime: 60000 * 60,
  });
};

export const useMovieRecommendations = (movieId) => {
  return useQuery({
    queryKey: ["movie-recommendations", movieId],
    queryFn: () => fetchMovieRecommendations(movieId),
    staleTime: 60000 * 60,
  });
};

export const useMovieReviews = (movieId) => {
  return useQuery({
    queryKey: ["movie-reviews", movieId],
    queryFn: () => fetchMovieReviews(movieId),
  });
};

export const useSearchMovies = (query, page = 1) => {
  return useQuery({
    queryKey: ["searchMovies", query, page],
    queryFn: () => searchMovies(query, page),
    enabled: !!query && query.trim().length > 0, // Only run query if there's a search term
    keepPreviousData: true,
    staleTime: 60000 * 2,
    cacheTime: 60000 * 5,
  });
};
