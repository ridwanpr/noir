import { Link } from "react-router-dom";
import { useState } from "react";
import { StarIcon } from "../../../components/common/Icons";

const MovieCard = ({ id, title, releaseYear, rating, posterPath }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Link to={`/movies/${id}`}>
      <div className="group cursor-pointer w-full max-w-xs">
        <div
          className="relative overflow-hidden rounded-xl w-full"
          style={{ paddingTop: "150%", backgroundColor: "#2d2d2d" }}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
            alt={title}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-all hover:scale-105 duration-300 ease-in-out ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setLoaded(true)}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="pt-4">
          <h3
            className="text-base sm:text-lg font-semibold mb-1 truncate"
            title={title}
          >
            {title}
          </h3>
          <div className="flex items-center justify-between text-xs sm:text-sm text-gray-400">
            <span>{releaseYear}</span>
            <div className="flex items-center space-x-1">
              <StarIcon />
              <span>{rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
