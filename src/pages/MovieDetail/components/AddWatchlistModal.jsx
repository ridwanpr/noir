const AddWatchlistModal = ({
  open,
  onClose,
  onConfirm,
  isLoading = false,
  rating,
  setRating,
  reviewTitle,
  setReviewTitle,
  reviewBody,
  setReviewBody,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm();
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } bg-black/70`}
    >
      <div
        className={`transform transition-all duration-300 ${
          open ? "scale-100 opacity-100" : "scale-95 opacity-0"
        } bg-gray-950 rounded-lg p-6 w-full max-w-md border border-gray-800`}
      >
        <h2 className="text-xl font-semibold text-white mb-4">
          Add to Watchlist
        </h2>
        <p className="text-gray-400 mb-6">
          Add this movie to your watchlist with a rating and review.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-400 mb-1 text-sm">
              Rating (1–5) *
            </label>
            <input
              type="number"
              min="1"
              max="5"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="w-full p-2 rounded bg-gray-950 text-white border border-gray-800 focus:ring-1 focus:ring-white focus:outline-none"
              required
              disabled={isLoading}
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-1 text-sm">
              Review Title *
            </label>
            <input
              type="text"
              value={reviewTitle}
              onChange={(e) => setReviewTitle(e.target.value)}
              className="w-full p-2 rounded bg-gray-950 text-white border border-gray-800 focus:ring-1 focus:ring-white focus:outline-none"
              required
              disabled={isLoading}
              placeholder="Enter a title for your review"
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-1 text-sm">
              Review Content *
            </label>
            <textarea
              value={reviewBody}
              onChange={(e) => setReviewBody(e.target.value)}
              className="w-full p-2 rounded bg-gray-950 text-white border border-gray-800 focus:ring-1 focus:ring-white focus:outline-none resize-none"
              rows="4"
              required
              disabled={isLoading}
              placeholder="Share your thoughts about this movie..."
            />
          </div>
          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              disabled={isLoading}
              className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="px-4 py-2 bg-white text-black rounded hover:bg-gray-300 font-semibold hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Adding..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddWatchlistModal;
