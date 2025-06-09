import api from ".";

export const fetchWatchlist = async (filter, page = 1) => {
  const params = {};

  if (filter && filter !== "all") {
    params.filter = filter;
  }

  params.page = page;

  const response = await api.get("/watchlist", { params });
  return response.data;
};

export const addToWatchlist = async (watchlistData) => {
  const { movieId, movieTitle, rating, reviewTitle, reviewBody } =
    watchlistData;

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

export const updateWatchlist = async (watchlistData) => {
  const { rating, reviewTitle, reviewBody, reviewId, watchlistId } =
    watchlistData;

  const payload = {
    rating: parseInt(rating),
    review_title: reviewTitle,
    review_body: reviewBody,
  };

  const response = await api.put(
    `/watchlist/${watchlistId}/${reviewId}`,
    payload
  );
  return response.data;
};

export const removeFromWatchlist = async (watchlist) => {
  const { watchlistId, reviewId } = watchlist;
  const response = await api.delete(`/watchlist/${watchlistId}/${reviewId}`);
  return response.data;
};
