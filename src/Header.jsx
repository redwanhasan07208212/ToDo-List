import LWSlogo from "./assets/lws-logo-en.svg";

const Header = () => {
  return (
    <div>
      <nav className="py-4 md:py-6 fixed top-0 w-full !bg-[#191D26] z-50 border-b border-gray-700 shadow-lg">
        <div className="container mx-auto flex items-center justify-between gap-x-6 px-4">
          {/* Logo with Tagline */}
          <a href="/" className="flex items-center gap-4 group">
            <div className="relative">
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">+</span>
              </div>
            </div>
            <div className="hidden lg:block border-l border-gray-600 pl-4">
              <h1 className="text-2xl font-bold text-white">Productivity<span className="text-blue-400">Suite</span></h1>
              <p className="text-sm text-gray-400">Streamline your workflow</p>
            </div>
          </a>

          {/* Navigation & Profile */}
          <div className="flex items-center gap-6">
            {/* Navigation Menu */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#tasks" className="text-gray-300 hover:text-white transition-colors font-medium text-sm">
                My Tasks
              </a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors font-medium text-sm">
                Projects
              </a>
              <a href="#analytics" className="text-gray-300 hover:text-white transition-colors font-medium text-sm">
                Analytics
              </a>
            </nav>

            {/* Profile with Notification */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-2 h-2 bg-red-400 rounded-full absolute -top-1 -right-1 animate-pulse"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center cursor-pointer hover:shadow-lg transition-all">
                  <span className="text-white font-semibold text-sm">JS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;