import { Link } from "react-router";
import { useState, useRef, useEffect } from "react";
import "./Navbar.module.css";
import { SearchIcon, UserIcon } from "../../common/Icons";
import useUserStore from "../../../store/userStore";
import { useSearchMovies } from "../../../hooks/movieHooks";
import { useDebounce } from "../../../hooks/useDebounce";
import SearchResults from "./SearchResults";

const Navbar = () => {
  const token = useUserStore((state) => state.token);
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);

  const debouncedQuery = useDebounce(searchQuery, 300);

  const {
    data: searchResults,
    isLoading,
    error,
  } = useSearchMovies(debouncedQuery);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    setShowResults(value.trim().length > 0);
  };

  const handleSearchFocus = () => {
    if (searchQuery.trim().length > 0) {
      setShowResults(true);
    }
  };

  const closeSearch = () => {
    setShowResults(false);
    setSearchQuery("");
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-12">
            <Link to="/">
              <div className="text-2xl font-bold tracking-tight">NOIR</div>
            </Link>
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
            <div className="relative" ref={searchRef}>
              <input
                type="text"
                placeholder="Search movies, series..."
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={handleSearchFocus}
                className="search-glow bg-gray-900/50 border border-gray-800 rounded-full px-4 py-2 pl-10 w-64 text-sm focus:outline-none focus:border-gray-700 transition-all"
              />
              <SearchIcon />

              {showResults && (
                <SearchResults
                  results={searchResults?.results || []}
                  isLoading={isLoading}
                  error={error}
                  query={debouncedQuery}
                  onClose={closeSearch}
                />
              )}
            </div>
            {token ? (
              <Link
                to="/watchlist"
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
