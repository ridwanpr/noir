const MovieHero = ({ data }) => {
  const {
    title,
    release_date,
    overview,
    vote_average,
    poster_path,
    genres,
  } = data;

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 flex items-center overflow-hidden">
      <div className="absolute inset-0 hero-backdrop opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-end">
          <div className="lg:col-span-1 flex justify-center lg:justify-start">
            <div className="w-64 md:w-72 lg:w-80 rounded-xl overflow-hidden shadow-2xl shadow-black/50 border border-white/5 movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={`${title} Poster`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-2 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-400 text-sm mb-3">
              <span>{release_date}</span>
              <span>•</span>
              <span>{genres.map((genre) => genre.name).join(", ")}</span>
              <span>•</span>
              <span>1h 56m</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tighter text-white mb-4">
              {title}
            </h1>
            <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6">
              <div className="flex items-center space-x-1 bg-black/20 backdrop-blur-sm border border-white/5 px-3 py-1 rounded-full">
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-white font-medium text-lg">
                  {vote_average}
                </span>
                <span className="text-gray-500 text-sm">/ 10</span>
              </div>
              <span className="text-gray-500 font-mono text-xs">
                IMDb Rating
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0 font-light">
              {overview}
            </p>
            <p className="text-gray-400 mb-2 font-light">
              Director:{" "}
              <span className="text-white font-medium">Denis Villeneuve</span>
            </p>
            <p className="text-gray-400 mb-10 font-light">
              Starring:{" "}
              <span className="text-white font-medium">
                Amy Adams, Jeremy Renner, Forest Whitaker
              </span>
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#trailer"
                className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-white/10 hover:shadow-white/20"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Watch Trailer</span>
              </a>
              <a
                href="#"
                className="bg-gray-800/50 border border-gray-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-700/70 transition-colors flex items-center justify-center space-x-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <span>Add to Watchlist</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieHero;
