const WeeklyFeatured = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-sm font-medium text-gray-500 mb-4 tracking-wide uppercase">
              Featured This Week
            </div>
            <h2 className="text-4xl font-bold mb-6">The Crown</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              A biographical drama series about the reign of Queen Elizabeth II.
              Experience the intrigue, romance, and political rivalries behind
              the events that shaped the second half of the 20th century.
            </p>
            <div className="flex items-center space-x-6 mb-8">
              <div className="flex items-center space-x-1">
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <span className="text-white font-medium">8.7</span>
              </div>
              <span className="text-gray-500">2016-2023</span>
              <span className="text-gray-500">4 Seasons</span>
            </div>
            <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
              Watch Now
            </button>
          </div>
          <div className="relative">
            <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden movie-card">
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-gray-400">The Crown - Season 4</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeeklyFeatured;
