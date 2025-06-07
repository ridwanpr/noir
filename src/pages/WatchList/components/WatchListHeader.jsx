import { useNavigate } from "react-router";
import useUserStore from "../../../store/userStore";
import { logoutUser } from "../../../services/authService";

const WatchListHeader = ({ watchList, currentFilter, onFilterChange }) => {
  const navigate = useNavigate();
  const { clearUser } = useUserStore();

  const handleLogout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.error("Logout failed:", error.message);
    } finally {
      clearUser();
      navigate("/login", { replace: true });
    }
  };

  return (
    <div className="mb-12 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
      <h1 className="text-4xl font-bold text-white">My Watchlist</h1>
      <div className="flex space-x-1 border border-gray-800 p-1 rounded-lg w-fit bg-gray-950/50">
        {watchList && (
          <>
            <button
              onClick={() => onFilterChange("all")}
              className={`filter-btn px-4 py-1.5 rounded-md text-sm ${
                currentFilter === "all" ? "active" : "text-gray-400"
              }`}
            >
              All ({watchList.reviewed_count + watchList.not_reviewed_count})
            </button>
            <button
              onClick={() => onFilterChange("reviewed")}
              className={`filter-btn px-4 py-1.5 rounded-md text-sm ${
                currentFilter === "reviewed" ? "active" : "text-gray-400"
              }`}
            >
              Reviewed ({watchList.reviewed_count})
            </button>
            <button
              onClick={() => onFilterChange("not_reviewed")}
              className={`filter-btn px-4 py-1.5 rounded-md text-sm ${
                currentFilter === "not_reviewed" ? "active" : "text-gray-400"
              }`}
            >
              Not Reviewed ({watchList.not_reviewed_count})
            </button>
          </>
        )}
      </div>
      <button
        onClick={handleLogout}
        className="logout-btn px-4 py-2 rounded-md text-sm bg-red-600/70 text-white hover:bg-red-600 hover:cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
};

export default WatchListHeader;
