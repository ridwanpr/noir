import api from ".";

export const fetchWatchlist = async () => {
  const response = await api.get("/watchlist");
  return response.data;
};

export const addToWatchlist = async (movieId) => {
  const response = await api.post("/watchlist", { movie_id: movieId });
  return response.data;
};

export const removeFromWatchlist = async (movieId) => {
  const response = await api.delete(`/watchlist/${movieId}`);
  return response.data;
};
