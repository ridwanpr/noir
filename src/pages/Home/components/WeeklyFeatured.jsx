import { Link } from "react-router";
import { StarIcon } from "../../../components/common/Icons";

const WeeklyFeatured = ({ data }) => {
  const { title, release_date, overview, vote_average, backdrop_path } = data;

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-sm font-medium text-gray-500 mb-4 tracking-wide uppercase">
              Featured This Week
            </div>
            <h2 className="text-4xl font-bold mb-6">{title}</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {overview}
            </p>
            <div className="flex items-center space-x-6 mb-8">
              <div className="flex items-center space-x-1">
                <StarIcon />
                <span className="text-white font-medium">
                  {vote_average && vote_average.toFixed(1)}
                </span>
              </div>
              <span className="text-gray-500">{release_date}</span>
            </div>
            <Link
              to={`/movies/${data.id}`}
              className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Detail
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden movie-card">
              {backdrop_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w780${backdrop_path}`}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeeklyFeatured;
