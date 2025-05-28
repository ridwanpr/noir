import { useQuery } from "@tanstack/react-query";
import { fetchTopSeries, getSeries } from "../services/seriesService";

export const useMovies = (sort, page) => {
  return useQuery({
    queryKey: ["series", sort, page],
    queryFn: () => getSeries(sort, page),
    keepPreviousData: true,
    staleTime: 60000 * 5,
  });
};

export const useTopSeries = () => {
  return useQuery({
    queryKey: ["top-series"],
    queryFn: () => fetchTopSeries(),
    staleTime: 60000 * 30,
  });
};
