import React, { useState } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";

const SearchTask = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    // Real-time search as user types
    onSearch(value);
  };

  return (
    <div className="w-full flex justify-center lg:justify-start">
      <form onSubmit={handleClick} className="w-full max-w-2xl">
        <div className="relative w-full group">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-blue-400/10 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300"></div>

          {/* Search Input */}
          <div className="relative">
            <input
              type="search"
              id="search-dropdown"
              className="block w-full bg-gray-800/50 backdrop-blur-sm px-5 py-4 pr-12 text-base rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400/50 placeholder-gray-400 border border-gray-600/50 focus:border-yellow-400/30 transition-all duration-300"
              placeholder="Search tasks by title..."
              value={searchTerm}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-yellow-400 transition-colors duration-200 p-2 hover:scale-110 transform"
            >
              <FaSearch className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </button>
          </div>

          {/* Search Hint */}
          <div className="absolute -bottom-6 left-0 text-xs text-gray-500 flex items-center gap-1">
            <FaFilter className="text-xs" />
            <span>Type to search in real-time</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchTask;
