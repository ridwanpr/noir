import { StarIcon } from "../../../components/common/Icons";

const MovieCard = () => {
  return (
    <div className="group cursor-pointer w-full max-w-xs">
      <div className="relative overflow-hidden rounded-xl">
        <div className="w-full h-72 bg-gray-900 flex items-center justify-center text-center">
          <img
            src="https://image.tmdb.org/t/p/w500/tmU7GeKVybMWFButWEGl2M4GeiP.jpg"
            alt="Inception"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="pt-4">
        <h3
          className="text-base sm:text-lg font-semibold mb-1 truncate"
          title="Inception"
        >
          Inception
        </h3>
        <div className="flex items-center justify-between text-xs sm:text-sm text-gray-400">
          <span>2010</span>
          <div className="flex items-center space-x-1">
            <StarIcon />
            <span>8.8</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
