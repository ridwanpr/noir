import { useQuery } from "@tanstack/react-query";
import { fetchWatchlist } from "../services/watchlistService";

export const useWatchlist = (filter) => {
  return useQuery({
    queryKey: ["watchlist", filter],
    queryFn: () => fetchWatchlist(filter),
    keepPreviousData: true,
  });
};
