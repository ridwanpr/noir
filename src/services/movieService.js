import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
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
