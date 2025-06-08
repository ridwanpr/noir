import { useState, useEffect } from "react";

const EditModal = ({ isOpen, onClose, item, onSave }) => {
  const [formData, setFormData] = useState({
    movie_title: "",
    rating: 0,
    review_title: "",
    review_body: "",
  });

  useEffect(() => {
    if (item) {
      setFormData({
        movie_title: item.movie_title || "",
        rating: item.review?.rating || 0,
        review_title: item.review?.review_title || "",
        review_body: item.review?.review_body || "",
      });
    }
  }, [item]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRatingChange = (rating) => {
    setFormData((prev) => ({
      ...prev,
      rating,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(item, formData);
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } bg-black/70 p-4`}
    >
      <div
        className={`transform transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        } bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-white">
            Edit Watchlist Item
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-xl"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Movie Title
            </label>
            <input
              type="text"
              name="movie_title"
              value={formData.movie_title}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-[#111111] border border-[#333333] rounded-md text-white focus:outline-none focus:border-[#555555]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Rating (1-5) *
            </label>
            <div className="flex space-x-1 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRatingChange(star)}
                  className={`text-xl ${
                    star <= formData.rating
                      ? "text-yellow-500"
                      : "text-gray-600"
                  } hover:text-yellow-400 transition-colors`}
                >
                  ★
                </button>
              ))}
            </div>
            <input
              type="number"
              min="1"
              max="5"
              value={formData.rating}
              onChange={(e) => handleRatingChange(parseInt(e.target.value))}
              className="w-full px-3 py-2 bg-[#111111] border border-[#333333] rounded-md text-white focus:outline-none focus:border-[#555555]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Review Title *
            </label>
            <input
              type="text"
              name="review_title"
              value={formData.review_title}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-[#111111] border border-[#333333] rounded-md text-white focus:outline-none focus:border-[#555555]"
              placeholder="Enter a title for your review"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Review Content *
            </label>
            <textarea
              name="review_body"
              value={formData.review_body}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-3 py-2 bg-[#111111] border border-[#333333] rounded-md text-white focus:outline-none focus:border-[#555555] resize-vertical"
              placeholder="Share your thoughts about this movie..."
              required
            />
          </div>

          <div className="flex space-x-2 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-[#1f1f1f] border border-[#333333] text-white py-2 px-4 rounded-md hover:bg-[#2a2a2a] transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors font-semibold"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
