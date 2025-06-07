import { PlayIcon, PlusIcon, StarIcon } from "../../../components/common/Icons";

const MovieHero = ({ data, credits }) => {
  const { title, release_date, overview, vote_average, poster_path, genres } =
    data;

  return (
    <section className="relative pt-28 pb-16  md:pb-24 flex items-center overflow-hidden">
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
                <StarIcon />
                <span className="text-white font-medium text-lg">
                  {vote_average.toFixed(1)}
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
            <p className="text-gray-400 mb-10 font-light">
              Starring:{" "}
              <span className="text-white font-medium">
                {credits.cast
                  .map((actor) => actor.name)
                  .slice(0, 3)
                  .join(", ")}
              </span>
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#trailer"
                className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-white/10 hover:shadow-white/20"
              >
                <PlayIcon />
                <span>Watch Trailer</span>
              </a>
              <a
                href="#"
                className="bg-gray-800/50 border border-gray-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-700/70 transition-colors flex items-center justify-center space-x-2"
              >
                <PlusIcon />
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
