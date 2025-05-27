import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../services/movieService";

const useMovies = (sort, page) => {
  return useQuery({
    queryKey: ["movies", sort, page],
    queryFn: () => getMovies(sort, page),
    keepPreviousData: true,
  });
};

export default useMovies;
