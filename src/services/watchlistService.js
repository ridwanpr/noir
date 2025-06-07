import api from ".";

export const fetchWatchlist = async (filter) => {
  const params = {};
  if (filter && filter !== "all") {
    params.filter = filter;
  }
  const response = await api.get("/watchlist", { params });
  return response.data;
};

export const addToWatchlist = async (watchlistData) => {
  const { movieId, movieTitle, rating, reviewTitle, reviewBody } = watchlistData;

  const payload = {
    movie_id: movieId,
    movie_title: movieTitle,
    rating: parseInt(rating),
    review_title: reviewTitle,
    review_body: reviewBody,
  };

  const response = await api.post("/watchlist", payload);
  return response.data;
};

export const removeFromWatchlist = async (movieId) => {
  const response = await api.delete(`/watchlist/${movieId}`);
  return response.data;
};
