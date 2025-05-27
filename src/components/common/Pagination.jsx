const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const MAX_PAGE = 500;
  const cappedTotalPages = Math.min(totalPages, MAX_PAGE);

  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < cappedTotalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    if (page >= 1 && page <= cappedTotalPages) {
      onPageChange(page);
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(cappedTotalPages, currentPage + 1);

    if (currentPage === 1) {
      endPage = Math.min(cappedTotalPages, 3);
    }

    if (currentPage === cappedTotalPages) {
      startPage = Math.max(1, cappedTotalPages - 2);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="mt-16 flex justify-center items-center space-x-1 sm:space-x-2 text-gray-400">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="pagination-btn px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed"
      >
        &laquo; Prev
      </button>

      {currentPage > 2 && (
        <>
          <button
            onClick={() => handlePageClick(1)}
            className="pagination-btn px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-sm"
          >
            1
          </button>
          {currentPage > 3 && <span className="px-1 sm:px-2">...</span>}
        </>
      )}

      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={`pagination-btn px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-sm ${
            currentPage === page
              ? "bg-blue-600 text-white font-semibold shadow"
              : "hover:bg-gray-200"
          }`}
        >
          {page}
        </button>
      ))}

      {currentPage < cappedTotalPages - 1 && (
        <>
          {currentPage < cappedTotalPages - 2 && (
            <span className="px-1 sm:px-2">...</span>
          )}
          <button
            onClick={() => handlePageClick(cappedTotalPages)}
            className="pagination-btn px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-sm"
          >
            {cappedTotalPages}
          </button>
        </>
      )}

      <button
        onClick={handleNext}
        disabled={currentPage === cappedTotalPages}
        className="pagination-btn px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next &raquo;
      </button>
    </div>
  );
};

export default Pagination;
