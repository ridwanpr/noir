import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addToWatchlist,
  fetchWatchlist,
  removeFromWatchlist,
  updateWatchlist,
} from "../services/watchlistService";

export const useWatchlist = (filter, page = 1) => {
  return useQuery({
    queryKey: ["watchlist", filter, page],
    queryFn: () => fetchWatchlist(filter, page),
    keepPreviousData: true,
  });
};

export const useAddToWatchlist = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addToWatchlist,
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: (query) =>
          Array.isArray(query.queryKey) && query.queryKey[0] === "watchlist",
      });
      queryClient.invalidateQueries({
        predicate: (query) =>
          Array.isArray(query.queryKey) &&
          query.queryKey[0] === "movie-reviews",
      });
      alert("Movie added to watchlist successfully!");
    },
    onError: (error) => {
      console.error("Failed to add movie to watchlist:", error);
      const errorMessage =
        error.response?.data?.message || "Failed to add movie to watchlist.";
      alert(errorMessage);
    },
  });
};

export const useEditWatchlist = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateWatchlist,
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: (query) =>
          Array.isArray(query.queryKey) && query.queryKey[0] === "watchlist",
      });
      alert("Watchlist updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to edit movie:", error);
      const errorMessage =
        error.response?.data?.message || "Failed to edit movie.";
      alert(errorMessage);
    },
  });
};

export const useDeleteWatchlist = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: removeFromWatchlist,
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: (query) =>
          Array.isArray(query.queryKey) && query.queryKey[0] === "watchlist",
      });
      alert("Watchlist removed successfully!");
    },
    onError: (error) => {
      console.error("Failed to delete movie:", error);
      const errorMessage =
        error.response?.data?.message || "Failed to delete watchlist.";
      alert(errorMessage);
    },
  });
};
