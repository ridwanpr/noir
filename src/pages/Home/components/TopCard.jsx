import { PlayIcon, StarIcon } from "../../../components/common/Icons";

const TopCard = () => {
  return (
    <div className="movie-card group cursor-pointer">
      <div className="relative overflow-hidden rounded-xl">
        <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <PlayIcon />
            </div>
            <p className="text-gray-500 text-sm">House of the Dragon</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
