const WatchlistBody = () => {
  return (
    <div class="space-y-6">
      <div class="watchlist-item glass-effect p-4 sm:p-6 rounded-2xl flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
        <img
          src="https://via.placeholder.com/100x150/1A1A1A/555555.png?text=ARRIVAL"
          alt="Arrival Poster"
          class="w-24 h-36 object-cover rounded-lg shadow-lg shrink-0"
        />
        <div class="flex-1 min-w-0">
          <h3 class="text-xl font-semibold text-white mb-1 truncate">
            Arrival
          </h3>
          <p class="text-sm text-gray-400 mb-4">2016 • Sci-Fi, Drama</p>
          <div class="bg-gray-900/70 p-4 rounded-lg border border-gray-800">
            <div class="flex items-center mb-2">
              <div class="text-yellow-400 flex text-lg">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span class="text-gray-600">★</span>
              </div>
              <span class="ml-3 text-white font-medium text-sm">
                My Review (4/5)
              </span>
            </div>
            <p class="text-sm text-gray-300 italic line-clamp-2">
              "A masterpiece of modern science fiction. Thought-provoking,
              emotional, and beautifully crafted. Amy Adams is fantastic."
            </p>
          </div>
        </div>
        <div class="flex flex-row md:flex-col space-x-3 md:space-x-0 md:space-y-3 shrink-0 w-full md:w-auto justify-end md:justify-center">
          <button class="bg-gray-700/50 border border-gray-600 text-white px-5 py-2 rounded-lg font-medium text-xs sm:text-sm hover:bg-gray-700 transition-colors flex items-center justify-center space-x-1.5">
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              ></path>
            </svg>
            <span>Edit Review</span>
          </button>
          <button class="bg-red-600/20 border border-red-600/50 text-red-400 px-5 py-2 rounded-lg font-medium text-xs sm:text-sm hover:bg-red-600/40 hover:text-red-300 transition-colors flex items-center justify-center space-x-1.5">
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              ></path>
            </svg>
            <span>Remove</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WatchlistBody;
