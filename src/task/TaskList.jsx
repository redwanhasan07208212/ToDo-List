import React from "react";
import { FaStar, FaEdit, FaTrash } from "react-icons/fa";

const TaskList = ({ tasks, onEdit, onDeleteTask, onFav }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      case "Medium":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Low":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const getTagColor = (index) => {
    const colors = [
      "bg-gradient-to-r from-cyan-500 to-blue-500",
      "bg-gradient-to-r from-purple-500 to-pink-500",
      "bg-gradient-to-r from-yellow-500 to-orange-500",
      "bg-gradient-to-r from-green-500 to-teal-500",
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="w-full">
      {/* Desktop Table */}
      <div className="hidden lg:block">
        <table className="w-full text-sm backdrop-blur-sm">
          <thead>
            <tr className="bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700/50">
              <th className="p-4 text-sm font-semibold text-gray-300 text-center w-16">
                ★
              </th>
              <th className="p-4 text-sm font-semibold text-gray-300 text-left min-w-[200px]">
                Title
              </th>
              <th className="p-4 text-sm font-semibold text-gray-300 text-left">
                Description
              </th>
              <th className="p-4 text-sm font-semibold text-gray-300 text-center min-w-[150px]">
                Tags
              </th>
              <th className="p-4 text-sm font-semibold text-gray-300 text-center w-28">
                Priority
              </th>
              <th className="p-4 text-sm font-semibold text-gray-300 text-center w-36">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr
                key={task.id}
                className={`border-b border-gray-700/30 transition-all duration-300 hover:bg-gray-700/20 ${
                  index % 2 === 0 ? "bg-gray-800/20" : "bg-gray-800/10"
                }`}
              >
                {/* Favorite */}
                <td className="p-4 text-center">
                  <button
                    onClick={() => onFav(task.id)}
                    className="cursor-pointer transform hover:scale-125 transition-transform duration-200 group"
                  >
                    {task.favorite ? (
                      <FaStar className="text-yellow-400 text-lg drop-shadow-lg group-hover:drop-shadow-2xl" />
                    ) : (
                      <FaStar className="text-gray-500 text-lg group-hover:text-yellow-300 transition-colors" />
                    )}
                  </button>
                </td>

                {/* Title */}
                <td className="p-4 max-w-[200px]">
                  <div className="line-clamp-2 break-words text-white font-medium">
                    {task.title}
                  </div>
                </td>

                {/* Description */}
                <td className="p-4 max-w-[300px]">
                  <div className="line-clamp-2 break-words text-gray-300">
                    {task.description}
                  </div>
                </td>

                {/* Tags */}
                <td className="p-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {task.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white shadow-lg ${getTagColor(
                          tagIndex
                        )}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </td>

                {/* Priority */}
                <td className="p-4 text-center">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(
                      task.priority
                    )}`}
                  >
                    {task.priority}
                  </span>
                </td>

                {/* Actions */}
                <td className="p-4">
                  <div className="flex items-center justify-center gap-3">
                    <button
                      onClick={() => onEdit(task)}
                      className="flex items-center gap-1 px-3 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 hover:text-blue-300 transition-all duration-200 group"
                    >
                      <FaEdit className="text-sm group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-medium">Edit</span>
                    </button>
                    <button
                      onClick={() => onDeleteTask(task.id)}
                      className="flex items-center gap-1 px-3 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 hover:text-red-300 transition-all duration-200 group"
                    >
                      <FaTrash className="text-sm group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-medium">Delete</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-yellow-400/20"
          >
            {/* Header with Favorite and Title */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3 flex-1">
                <button
                  onClick={() => onFav(task.id)}
                  className="cursor-pointer transform hover:scale-110 transition-transform duration-200 flex-shrink-0"
                >
                  {task.favorite ? (
                    <FaStar className="text-yellow-400 text-lg drop-shadow-lg" />
                  ) : (
                    <FaStar className="text-gray-500 text-lg" />
                  )}
                </button>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-white text-base line-clamp-2 break-words">
                    {task.title}
                  </h3>
                </div>
              </div>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border flex-shrink-0 ml-2 ${getPriorityColor(
                  task.priority
                )}`}
              >
                {task.priority}
              </span>
            </div>

            {/* Description */}
            <div className="mb-4">
              <p className="text-gray-300 text-sm line-clamp-3 break-words leading-relaxed">
                {task.description}
              </p>
            </div>

            {/* Tags */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {task.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium text-white ${getTagColor(
                      index
                    )}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-700/50">
              <button
                onClick={() => onEdit(task)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 hover:text-blue-300 transition-all duration-200 text-sm font-medium"
              >
                <FaEdit className="text-sm" />
                Edit
              </button>
              <button
                onClick={() => onDeleteTask(task.id)}
                className="flex items-center gap-2 px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 hover:text-red-300 transition-all duration-200 text-sm font-medium"
              >
                <FaTrash className="text-sm" />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
