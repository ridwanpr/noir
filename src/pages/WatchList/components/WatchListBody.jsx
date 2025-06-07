const WatchlistBody = ({ watchList, isLoading }) => {
  if (isLoading)
    return <div className="text-gray-300 text-center">Loading...</div>;

  return (
    <div className="space-y-3">
      {watchList &&
        watchList.data.data.map((item) => (
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
              <button className="bg-[#1f1f1f] border border-[#333333] text-white px-3 py-1.5 rounded-md text-xs font-medium hover:bg-[#2a2a2a] transition-colors">
                Edit
              </button>
              <button className="bg-[#2a0a0a] border border-[#3a1a1a] text-red-400 px-3 py-1.5 rounded-md text-xs font-medium hover:bg-[#3a0a0a] hover:text-red-300 transition-colors">
                Remove
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default WatchlistBody;
