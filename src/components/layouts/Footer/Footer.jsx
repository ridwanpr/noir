const Footer = () => {
  return (
    <footer className="border-t border-gray-800 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">NOIR</div>
            <p className="text-gray-400 text-sm">
              Premium cinema experience for the modern viewer.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Browse</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <a href="#" className="block hover:text-white transition-colors">
                Movies
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                TV Series
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Documentaries
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Trending
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Help</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <a href="#" className="block hover:text-white transition-colors">
                FAQ
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Contact
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Support
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Account
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <a href="#" className="block hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
        <div className="section-divider my-8"></div>
        <div className="text-center text-sm text-gray-500">
          © 2025 NOIR. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
