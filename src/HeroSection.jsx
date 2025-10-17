import HeroImg from "./assets/todo-image.jpg";

const HeroSection = () => {
  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-24 lg:pt-32 lg:pb-28 bg-gradient-to-br from-[#0F121A] via-[#1a1f2e] to-[#0F121A] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid items-center gap-12 lg:gap-20 xl:gap-24 md:grid-cols-2">
          {/* Hero Content */}
          <div className="text-center md:text-left space-y-6 md:space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/20 mb-4">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="text-yellow-400 text-sm font-medium">Your Productivity Partner</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] font-bold leading-tight">
                <span className="bg-gradient-to-r from-[#F5BF42] via-[#FFD700] to-[#F5BF42] bg-clip-text text-transparent animate-gradient">
                  Tasker
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto md:mx-0">
                Organize, Prioritize, and Conquer Your Tasks with 
                <span className="text-yellow-400 font-semibold"> Tasker</span> — 
                Your Personal Productivity Ally
              </p>
            </div>

            {/* Feature Points */}
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto md:mx-0">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                Smart Organization
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                Priority Management
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                Real-time Sync
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                Cross-Platform
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <button className="px-8 py-4 bg-gradient-to-r from-[#F5BF42] to-[#FFD700] text-gray-900 font-semibold rounded-xl hover:shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 transform hover:-translate-y-1">
                Get Started Free
              </button>
              <button className="px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center md:order-2 relative">
            <div className="relative">
              {/* Floating Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-blue-400/20 rounded-3xl blur-xl transform rotate-6 scale-105"></div>
              
              {/* Main Image */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700/50 transform hover:scale-105 transition-transform duration-500">
                <img
                  className="w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[420px] xl:max-w-[480px] h-auto drop-shadow-2xl rounded-2xl"
                  src={HeroImg}
                  alt="Task Management Dashboard"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-400/10 rounded-2xl border border-green-400/20 backdrop-blur-sm"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400/10 rounded-2xl border border-blue-400/20 backdrop-blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;