import { Link } from "react-router-dom";
import { StarIcon } from "../../../components/common/Icons";

const Recommendation = ({ data, isLoading }) => {
  if (isLoading) return null;
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-white">
          You Might Also Like
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {data.map((movie) => (
            <Link to={`/movies/${movie.id}`} key={movie.id}>
              <div className="movie-card group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl poster-container">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt="Interstellar Poster"
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-300 transform group-hover:scale-105"
                  />
                </div>
                <div className="pt-4">
                  <h3
                    className="text-base sm:text-lg font-semibold mb-1 truncate"
                    title="Interstellar"
                  >
                    {movie.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs sm:text-sm text-gray-400">
                    <span>{movie.release_date.split("-")[0]}</span>
                    <div className="flex items-center space-x-1">
                      <StarIcon />
                      <span>{movie.vote_average}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommendation;
