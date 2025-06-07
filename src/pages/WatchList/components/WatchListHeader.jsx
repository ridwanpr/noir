const WatchListHeader = () => {
  return (
    <div class="mb-12 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
      <h1 class="text-4xl font-bold text-white">My Watchlist</h1>
      <div class="flex space-x-1 border border-gray-800 p-1 rounded-lg w-fit bg-gray-950/50">
        <button class="filter-btn active px-4 py-1.5 rounded-md text-sm">
          All (4)
        </button>
        <button class="filter-btn px-4 py-1.5 rounded-md text-sm text-gray-400">
          Reviewed (2)
        </button>
        <button class="filter-btn px-4 py-1.5 rounded-md text-sm text-gray-400">
          Not Reviewed (2)
        </button>
      </div>
    </div>
  );
};

export default WatchListHeader;
