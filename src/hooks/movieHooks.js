import { useQuery } from "@tanstack/react-query";
import {
  getMovies,
  fetchTopMovies,
  fetchMovieById,
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
