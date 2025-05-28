import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
  },
});

export const getSeries = async (sort, page = 1) => {
  const response = await api.get(`/tv/${sort}`, {
    params: {
      page: page,
    },
  });
  return response.data;
};

export const fetchTopSeries = async () => {
  const response = await api.get("/tv/popular", { params: { page: 1 } });
  return response.data.results.slice(0, 2);
};
