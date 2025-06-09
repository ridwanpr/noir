import { Link } from "react-router";

const SearchResults = ({ results, isLoading, error, query, onClose }) => {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w92";

  if (isLoading) {
    return (
      <div className="absolute top-full left-0 right-0 mt-2 bg-black/95 border border-gray-700 rounded-lg shadow-2xl max-h-96 overflow-y-auto z-10 backdrop-blur-sm">
        <div className="p-4 text-center text-gray-400">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mx-auto"></div>
          <p className="mt-2 text-sm">Searching...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="absolute top-full left-0 right-0 mt-2 bg-black/95 border border-gray-700 rounded-lg shadow-2xl z-10 backdrop-blur-sm">
        <div className="p-4 text-center text-red-400">
          <p className="text-sm">Error searching movies</p>
        </div>
      </div>
    );
  }

  if (!results || results.length === 0) {
    return (
      <div className="absolute top-full left-0 right-0 mt-2 bg-black/95 border border-gray-700 rounded-lg shadow-2xl z-10 backdrop-blur-sm">
        <div className="p-4 text-center text-gray-400">
          <p className="text-sm">No movies found for "{query}"</p>
        </div>
      </div>
    );
  }

  const displayResults = results.slice(0, 8);

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-black/95 border border-gray-700 rounded-lg shadow-2xl max-h-96 overflow-y-auto z-10 backdrop-blur-sm">
      {displayResults.map((movie) => (
        <Link
          key={movie.id}
          to={`/movies/${movie.id}`}
          onClick={onClose}
          className="flex items-center p-3 hover:bg-gray-800/80 transition-colors border-b border-gray-700/50 last:border-b-0"
        >
          <div className="flex-shrink-0 w-12 h-16 mr-3">
            {movie.poster_path ? (
              <img
                src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-full object-cover rounded"
              />
            ) : (
              <div className="w-full h-full bg-gray-800/60 rounded flex items-center justify-center">
                <span className="text-gray-400 text-xs">No Image</span>
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-white text-sm font-medium truncate">
              {movie.title}
            </h4>
            <p className="text-gray-400 text-xs mt-1">
              {movie.release_date
                ? new Date(movie.release_date).getFullYear()
                : "N/A"}
            </p>
            {movie.vote_average > 0 && (
              <div className="flex items-center mt-1">
                <span className="text-yellow-400 text-xs">★</span>
                <span className="text-gray-400 text-xs ml-1">
                  {movie.vote_average.toFixed(1)}
                </span>
              </div>
            )}
          </div>
        </Link>
      ))}

      {results.length > 8 && (
        <div className="p-3 text-center border-t border-gray-700/50">
          <p className="text-gray-400 text-xs">
            Showing {displayResults.length} of {results.length} results
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
