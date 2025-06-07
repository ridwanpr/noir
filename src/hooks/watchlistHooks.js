import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addToWatchlist, fetchWatchlist } from "../services/watchlistService";

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
