import { useNavigate } from "react-router";
import useUserStore from "../../../store/userStore";
import { logoutUser } from "../../../services/authService";

const WatchListHeader = () => {
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
        <button className="filter-btn active px-4 py-1.5 rounded-md text-sm">
          All (4)
        </button>
        <button className="filter-btn px-4 py-1.5 rounded-md text-sm text-gray-400">
          Reviewed (2)
        </button>
        <button className="filter-btn px-4 py-1.5 rounded-md text-sm text-gray-400">
          Not Reviewed (2)
        </button>
      </div>
      <button
        onClick={handleLogout}
        className="logout-btn px-4 py-2 rounded-md text-sm bg-red-500 text-white hover:bg-red-600 hover:cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
};

export default WatchListHeader;
