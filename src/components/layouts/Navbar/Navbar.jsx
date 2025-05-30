import { Link } from "react-router";
import { useContext } from "react";
import "./Navbar.module.css";
import { AppContext } from "../../../context/AppContext";
import { SearchIcon, UserIcon } from "../../common/Icons";

const Navbar = () => {
  const { token } = useContext(AppContext);

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-12">
            <div className="text-2xl font-bold tracking-tight">NOIR</div>
            <div className="hidden md:flex space-x-8">
              <Link
                to="/"
                className="nav-item text-sm font-medium text-gray-300 hover:text-white"
              >
                Home
              </Link>
              <Link
                to="/movies"
                className="nav-item text-sm font-medium text-gray-300 hover:text-white"
              >
                Movies
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search movies, series..."
                className="search-glow bg-gray-900/50 border border-gray-800 rounded-full px-4 py-2 pl-10 w-64 text-sm focus:outline-none focus:border-gray-700 transition-all"
              />
              <SearchIcon />
            </div>
            {token ? (
              <Link
                to="/profile"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <span className="w-4 h-4">
                  <UserIcon />
                </span>
              </Link>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 bg-slate-800 text-white rounded-md flex items-center justify-center hover:bg-slate-700 transition-colors"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
