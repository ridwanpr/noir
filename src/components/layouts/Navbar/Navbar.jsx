import "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-12">
            <div className="text-2xl font-bold tracking-tight">NOIR</div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#"
                className="nav-item text-sm font-medium text-gray-300 hover:text-white"
              >
                Home
              </a>
              <a
                href="#"
                className="nav-item text-sm font-medium text-gray-300 hover:text-white"
              >
                Movies
              </a>
              <a
                href="#"
                className="nav-item text-sm font-medium text-gray-300 hover:text-white"
              >
                Series
              </a>
              <a
                href="#"
                className="nav-item text-sm font-medium text-gray-300 hover:text-white"
              >
                Trending
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search movies, series..."
                className="search-glow bg-gray-900/50 border border-gray-800 rounded-full px-4 py-2 pl-10 w-64 text-sm focus:outline-none focus:border-gray-700 transition-all"
              />
              <svg
                className="absolute left-3 top-2.5 w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <button className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
