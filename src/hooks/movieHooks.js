import { useQuery } from "@tanstack/react-query";
import {
  getMovies,
  fetchTopMovies,
  fetchMovieById,
  fetchMovieVideo,
  fetchMovieCredits,
  fetchMovieRecommendations,
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
    staleTime: 60000 * 60,
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
