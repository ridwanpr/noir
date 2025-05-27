const MovieFilter = ({ sort, setSort }) => {
  return (
    <div className="mb-12 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
      <h1 className="text-4xl font-bold text-white">Explore Movies</h1>
      <div className="flex items-center space-x-3 sm:space-x-4">
        <select className="search-glow bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-gray-800 transition-all appearance-none">
          <option>All Genres</option>
          <option>Action</option>
          <option>Adventure</option>
          <option>Comedy</option>
          <option>Drama</option>
          <option>Horror</option>
          <option>Sci-Fi</option>
          <option>Thriller</option>
        </select>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="search-glow bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-gray-800 transition-all appearance-none"
        >
          <option value="popular">Sort by Popularity</option>
          <option value="top_rated">Sort by Top Rated</option>
          <option value="now_playing">Sort by Now Playing</option>
          <option value="upcoming">Sort by Upcoming</option>
        </select>
      </div>
    </div>
  );
};

export default MovieFilter;
