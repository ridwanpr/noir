import { Link } from "react-router";
import { StarIcon } from "../../../components/common/Icons";

const TopCard = ({ title, backdrop_path, rating, id }) => {
  return (
    <Link to={`/movies/${id}`}>
      <div className="movie-card group cursor-pointer">
        <div className="relative overflow-hidden rounded-xl">
          <div className="aspect-video bg-gray-900">
            <img
              src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="pt-4">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <div className="flex items-center justify-between text-sm text-gray-400">
            <div className="flex items-center space-x-4">
              <span>2025</span>
              <div className="flex items-center space-x-1">
                <StarIcon />
                <span>{rating.toFixed(1)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TopCard;
