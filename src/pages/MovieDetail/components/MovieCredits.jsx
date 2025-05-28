const MovieCredits = ({ data, isLoading }) => {
  if (isLoading) return null;
  const { cast } = data;

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-white">Cast</h2>
        <div className="flex overflow-x-auto space-x-6 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
          {cast
            .filter((actor) => actor.profile_path)
            .map((actor) => (
              <div
                key={actor.id}
                className="flex-shrink-0 w-32 text-center group"
              >
                <div className="w-32 h-32 rounded-full bg-gray-800 mb-3 overflow-hidden border-2 border-transparent group-hover:border-white/20 transition-all duration-300 transform group-hover:scale-105">
                  <img
                    src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                    alt={actor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-white text-sm">
                  {actor.name}
                </h4>
                <p className="text-gray-400 text-xs">{actor.character}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default MovieCredits;
