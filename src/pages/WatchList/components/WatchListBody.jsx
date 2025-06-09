import { useState } from "react";
import Pagination from "./Pagination";
import EditModal from "./EditModal";
import {
  useDeleteWatchlist,
  useEditWatchlist,
} from "../../../hooks/watchlistHooks";

const WatchlistBody = ({ watchList, isLoading, currentPage, onPageChange }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const editWatchlistMutation = useEditWatchlist();
  const useDeleteWatchlistMutation = useDeleteWatchlist();

  const handleEditClick = (item) => {
    setSelectedItem(item);
    setIsEditModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsEditModalOpen(false);
    setSelectedItem(null);
  };

  const handleSaveEdit = async (item, formData) => {
    editWatchlistMutation.mutate({
      watchlistId: item.id,
      reviewId: item.review?.review_id || null,
      rating: formData.rating,
      reviewTitle: formData.review_title,
      reviewBody: formData.review_body,
    });
  };

  const handleDeleteClick = async (item) => {
    if (window.confirm("Are you sure you want to delete this watchlist?"))
      useDeleteWatchlistMutation.mutate({
        watchlistId: item.id,
        reviewId: item.review?.review_id || null,
      });
  };

  if (isLoading)
    return <div className="text-gray-300 text-center">Loading...</div>;

  const paginationData = watchList?.data;
  const itemsData = paginationData?.data || [];
  const totalPages = paginationData?.last_page || 1;

  // Convert object to array if it's an object with numeric keys
  let items = [];
  if (Array.isArray(itemsData)) {
    items = itemsData;
  } else if (itemsData && typeof itemsData === "object") {
    items = Object.values(itemsData);
  }

  return (
    <div>
      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-3 flex flex-col md:flex-row items-start md:items-center md:space-x-3"
          >
            <div className="flex-1 min-w-0 w-full">
              <h3 className="text-base font-semibold text-white mb-1 truncate">
                {item.movie_title}
              </h3>
              {item.review ? (
                <div className="bg-[#111111] p-3 rounded-md border border-[#222222]">
                  <div className="flex items-center mb-1">
                    <div className="flex text-sm space-x-0.5">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={
                            i < item.review.rating
                              ? "text-yellow-500"
                              : "text-gray-700"
                          }
                        >
                          &#x2605;
                        </span>
                      ))}
                    </div>
                    <span className="ml-2 text-gray-300 text-xs truncate">
                      ({item.review.rating}/5) {item.review.review_title}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 line-clamp-2">
                    {item.review.review_body}
                  </p>
                </div>
              ) : (
                <div className="bg-[#111111] p-3 rounded-md border border-[#222222] text-gray-500 text-xs italic">
                  Not reviewed yet
                </div>
              )}
            </div>
            <div className="mt-2 md:mt-0 flex md:flex-col gap-2 w-full md:w-auto justify-end">
              <button
                onClick={() => handleEditClick(item)}
                className="bg-[#1f1f1f] border border-[#333333] text-white px-3 py-1.5 rounded-md text-xs font-medium hover:bg-[#2a2a2a] transition-colors"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteClick(item)}
                className="bg-[#2a0a0a] border border-[#3a1a1a] text-red-400 px-3 py-1.5 rounded-md text-xs font-medium hover:bg-[#3a0a0a] hover:text-red-300 transition-colors"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />

      {paginationData && (
        <div className="text-center mt-4 text-sm text-gray-400">
          Showing {paginationData.from || 0} to {paginationData.to || 0} of{" "}
          {paginationData.total || 0} results
        </div>
      )}

      <EditModal
        isOpen={isEditModalOpen}
        onClose={handleCloseModal}
        item={selectedItem}
        onSave={handleSaveEdit}
      />
    </div>
  );
};

export default WatchlistBody;
