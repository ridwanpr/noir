import { useQuery } from "@tanstack/react-query";
import { fetchWatchlist } from "../services/watchlistService";

export const useWatchlist = () => {
  return useQuery({
    queryKey: ["watchlist"],
    queryFn: () => fetchWatchlist(),
  });
};
