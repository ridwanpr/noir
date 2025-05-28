const FeaturedSection = ({ data }) => {
  const { title, release_date, overview, vote_average, poster_path, genres } =
    data;
  return (
    <section className="min-h-screen flex items-center bg-black py-20 lg:py-0">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="mb-8">
              <span className="text-gray-600 font-mono text-sm uppercase tracking-widest border-b border-gray-800 pb-1">
                Featured Selection
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-none tracking-tighter text-gray-100 mb-6">
              {title}
            </h1>
            {overview && (
              <p className="text-lg lg:text-xl text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
                {overview.length > 150
                  ? overview.slice(0, 165) + "..."
                  : overview}
              </p>
            )}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#"
                className="group relative inline-block text-lg font-medium text-black bg-white px-10 py-4 rounded-md shadow-lg shadow-white/5 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
              >
                <span className="relative z-10">Movie Detail</span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-md"></span>
              </a>
              <a
                href="#"
                className="group relative inline-block text-lg font-medium text-gray-300 bg-black border border-gray-800 px-10 py-4 rounded-md transition-all duration-300 ease-in-out hover:border-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-black"
              >
                Explore Movie
              </a>
            </div>

            <div className="mt-16 text-gray-600 font-mono text-xs space-y-2 text-center lg:text-left">
              <p>Rating: {vote_average}</p>
              <p>Release: {release_date}</p>
              <p>
                Genres: {genres && genres.map((genre) => genre.name).join(", ")}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-72 md:w-80 lg:w-96 group">
              {poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt="Arrival Movie Poster"
                  className="rounded-xl w-full shadow-2xl shadow-black/60 transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 rounded-xl border border-white/5 opacity-60 group-hover:border-white/10 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
