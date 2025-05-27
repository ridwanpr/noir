import { StarIcon } from "../../../components/common/Icons";

const TopCard = () => {
  return (
    <div className="movie-card group cursor-pointer">
      <div className="relative overflow-hidden rounded-xl">
        <div className="aspect-video bg-gray-900">
          <img
            src="https://image.tmdb.org/t/p/w780/6LWy0jvMpmjoS9fojNgHIKoWL05.jpg"
            alt="House of the Dragon"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="pt-4">
        <h3 className="text-xl font-semibold mb-2">House of the Dragon</h3>
        <div className="flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center space-x-4">
            <span>2022-2024</span>
            <div className="flex items-center space-x-1">
              <StarIcon />
              <span>8.5</span>
            </div>
          </div>
          <span>2 Seasons</span>
        </div>
      </div>
    </div>
  );
};

export default TopCard;
