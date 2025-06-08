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
      } bg-black/70 p-4`}
    >
      <div
        className={`transform transition-all duration-300 ${
          open ? "scale-100 opacity-100" : "scale-95 opacity-0"
        } bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto`}
      >
        <h2 className="text-lg font-semibold text-white mb-4">
          Add to Watchlist
        </h2>
        <p className="text-gray-400 mb-6">
          Add this movie to your watchlist with a rating and review.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Rating (1–5) *
            </label>
            <input
              type="number"
              min="1"
              max="5"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="w-full px-3 py-2 bg-[#111111] border border-[#333333] rounded-md text-white focus:outline-none focus:border-[#555555]"
              disabled={isLoading}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Review Title *
            </label>
            <input
              type="text"
              value={reviewTitle}
              onChange={(e) => setReviewTitle(e.target.value)}
              className="w-full px-3 py-2 bg-[#111111] border border-[#333333] rounded-md text-white focus:outline-none focus:border-[#555555]"
              disabled={isLoading}
              placeholder="Enter a title for your review"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Review Content *
            </label>
            <textarea
              value={reviewBody}
              onChange={(e) => setReviewBody(e.target.value)}
              className="w-full px-3 py-2 bg-[#111111] border border-[#333333] rounded-md text-white focus:outline-none focus:border-[#555555] resize-vertical"
              rows="4"
              disabled={isLoading}
              placeholder="Share your thoughts about this movie..."
            />
          </div>
          <div className="flex space-x-2 pt-4">
            <button
              type="button"
              onClick={onClose}
              disabled={isLoading}
              className="flex-1 bg-[#1f1f1f] border border-[#333333] text-white py-2 px-4 rounded-md hover:bg-[#2a2a2a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
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
