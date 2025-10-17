/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaTimes, FaPlus, FaEdit, FaTag, FaFlag, FaStar } from "react-icons/fa";

const AddModalTask = ({ onSave, taskToUpdate, onCloseClick }) => {
  const [task, setTask] = useState(
    taskToUpdate || {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      tags: [],
      priority: "",
      favorite: false,
    }
  );
  const [isAdd, setIsAdd] = useState(Object.is(taskToUpdate, null));

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setTask({
      ...task,
      [name]:
        name === "tags" ? value.split(",").map((tag) => tag.trim()) : value,
    });
  };

  const handleFavoriteToggle = () => {
    setTask({
      ...task,
      favorite: !task.favorite,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(task, isAdd);
  };

  return (
    <>
      {/* Backdrop with Animated Gradient */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-xl z-40">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
      </div>

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[95%] md:max-w-[640px] lg:max-w-[780px] rounded-3xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/30 shadow-2xl p-6 md:p-8 lg:p-10 relative overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-blue-400/5 rounded-3xl blur-sm -z-10"></div>

          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl">
                {isAdd ? (
                  <FaPlus className="text-gray-900 text-lg" />
                ) : (
                  <FaEdit className="text-gray-900 text-lg" />
                )}
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {isAdd ? "Add New Task" : "Update Task"}
              </h2>
            </div>
            <button
              type="button"
              onClick={onCloseClick}
              className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-xl transition-all duration-200 hover:scale-110"
            >
              <FaTimes className="text-xl" />
            </button>
          </div>

          {/* Inputs */}
          <div className="space-y-6 text-white">
            {/* Title Field */}
            <div className="space-y-3">
              <label
                htmlFor="title"
                className="block text-sm font-semibold text-gray-300"
              >
                Task Title *
              </label>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-blue-400/10 rounded-xl blur-sm group-hover:blur transition-all duration-300"></div>
                <input
                  className="relative block w-full rounded-xl bg-gray-800/50 backdrop-blur-sm px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 border border-gray-600/50 focus:border-yellow-400/30 transition-all duration-300 placeholder-gray-400"
                  type="text"
                  name="title"
                  id="title"
                  value={task.title}
                  onChange={handleChange}
                  placeholder="Enter task title..."
                  required
                />
              </div>
            </div>

            {/* Description Field */}
            <div className="space-y-3">
              <label
                htmlFor="description"
                className="block text-sm font-semibold text-gray-300"
              >
                Description *
              </label>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-blue-400/10 rounded-xl blur-sm group-hover:blur transition-all duration-300"></div>
                <textarea
                  className="relative block min-h-[140px] w-full rounded-xl bg-gray-800/50 backdrop-blur-sm px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 border border-gray-600/50 focus:border-yellow-400/30 transition-all duration-300 placeholder-gray-400 resize-vertical"
                  name="description"
                  id="description"
                  value={task.description}
                  onChange={handleChange}
                  placeholder="Describe your task in detail..."
                  required
                ></textarea>
              </div>
            </div>

            {/* Tags & Priority & Favorite */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Tags */}
              <div className="space-y-3">
                <label
                  htmlFor="tags"
                  className="text-sm font-semibold text-gray-300 flex items-center gap-2"
                >
                  <FaTag className="text-yellow-400 text-xs" />
                  Tags *
                </label>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-blue-400/10 rounded-xl blur-sm group-hover:blur transition-all duration-300"></div>
                  <input
                    className="relative block w-full rounded-xl bg-gray-800/50 backdrop-blur-sm px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 border border-gray-600/50 focus:border-yellow-400/30 transition-all duration-300 placeholder-gray-400"
                    type="text"
                    name="tags"
                    id="tags"
                    value={task.tags.join(", ")}
                    onChange={handleChange}
                    placeholder="Work, Urgent, React"
                    required
                  />
                </div>
                <p className="text-xs text-gray-400">
                  Separate tags with commas
                </p>
              </div>

              {/* Priority */}
              <div className="space-y-3">
                <label
                  htmlFor="priority"
                  className="block text-sm font-semibold text-gray-300 flex items-center gap-2"
                >
                  <FaFlag className="text-yellow-400 text-xs" />
                  Priority *
                </label>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-blue-400/10 rounded-xl blur-sm group-hover:blur transition-all duration-300"></div>
                  <select
                    className="relative block w-full cursor-pointer rounded-xl bg-gray-800/50 backdrop-blur-sm px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 border border-gray-600/50 focus:border-yellow-400/30 transition-all duration-300 appearance-none"
                    name="priority"
                    id="priority"
                    value={task.priority}
                    onChange={handleChange}
                    required
                  >
                    <option value="" className="bg-gray-800">
                      Select Priority
                    </option>
                    <option value="Low" className="bg-gray-800 text-green-400">
                      Low
                    </option>
                    <option
                      value="Medium"
                      className="bg-gray-800 text-yellow-400"
                    >
                      Medium
                    </option>
                    <option value="High" className="bg-gray-800 text-red-400">
                      High
                    </option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Favorite */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-300 flex items-center gap-2">
                  <FaStar className="text-yellow-400 text-xs" />
                  Favorite
                </label>
                <button
                  type="button"
                  onClick={handleFavoriteToggle}
                  className={`w-full rounded-xl py-3.5 border transition-all duration-300 transform hover:scale-105 ${
                    task.favorite
                      ? "bg-yellow-400/20 border-yellow-400/50 text-yellow-400"
                      : "bg-gray-800/50 border-gray-600/50 text-gray-400 hover:border-yellow-400/30"
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <FaStar
                      className={
                        task.favorite ? "text-yellow-400" : "text-gray-500"
                      }
                    />
                    <span className="text-sm font-medium">
                      {task.favorite ? "Favorited" : "Add to Favorites"}
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* Preview Tags */}
            {task.tags.length > 0 && (
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-300">
                  Tag Preview
                </label>
                <div className="flex flex-wrap gap-2">
                  {task.tags.map((tag, index) => {
                    const colors = [
                      "bg-gradient-to-r from-cyan-500 to-blue-500",
                      "bg-gradient-to-r from-purple-500 to-pink-500",
                      "bg-gradient-to-r from-yellow-500 to-orange-500",
                      "bg-gradient-to-r from-green-500 to-teal-500",
                    ];
                    return (
                      <span
                        key={index}
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white ${
                          colors[index % colors.length]
                        }`}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-end gap-4">
            <button
              type="button"
              className="group relative flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-gray-700 to-gray-800 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-red-500 hover:text-red-400 hover:shadow-xl hover:shadow-red-500/10 transform hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
              onClick={onCloseClick}
            >
              <div className="absolute inset-0 bg-red-500/10 rounded-xl blur-sm group-hover:blur transition-all duration-300"></div>
              <FaTimes className="relative z-10" />
              <span className="relative z-10">Cancel</span>
            </button>
            <button
              type="submit"
              className="group relative flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-xl hover:shadow-2xl hover:shadow-yellow-400/25 transform hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-white/20 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
              {isAdd ? (
                <>
                  <FaPlus className="relative z-10" />
                  <span className="relative z-10">Add Task</span>
                </>
              ) : (
                <>
                  <FaEdit className="relative z-10" />
                  <span className="relative z-10">Update Task</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddModalTask;
