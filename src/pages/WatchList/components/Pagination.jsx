const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages);
    } else {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="flex items-center justify-center space-x-2 mt-16">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          currentPage === 1
            ? "bg-[#1a1a1a] text-gray-600 cursor-not-allowed"
            : "bg-[#1f1f1f] text-white hover:bg-[#2a2a2a] border border-[#333333]"
        }`}
      >
        Previous
      </button>

      {/* Page Numbers */}
      {visiblePages.map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === "number" && onPageChange(page)}
          disabled={page === "..."}
          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            page === currentPage
              ? "bg-blue-600 text-white"
              : page === "..."
              ? "text-gray-500 cursor-default"
              : "bg-[#1f1f1f] text-white hover:bg-[#2a2a2a] border border-[#333333]"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          currentPage === totalPages
            ? "bg-[#1a1a1a] text-gray-600 cursor-not-allowed"
            : "bg-[#1f1f1f] text-white hover:bg-[#2a2a2a] border border-[#333333]"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
