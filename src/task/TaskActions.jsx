import React from "react";
import { FaPlus, FaTrash, FaChartLine } from "react-icons/fa";

const TaskActions = ({ onAddClick, onDeleteAllTasks, taskCount = 0 }) => {
  return (
    <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-6 w-full mt-10">
      {/* Title with Stats */}
      <div className="text-center xs:text-left space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Task Dashboard
        </h2>
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>{taskCount} tasks</span>
          </div>
          <div className="flex items-center gap-1">
            <FaChartLine className="text-yellow-400 text-xs" />
            <span>Productivity</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 w-full xs:w-auto">
        <button
          className="group relative flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-xl hover:shadow-2xl hover:shadow-yellow-400/25 transform hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
          onClick={onAddClick}
        >
          <div className="absolute inset-0 bg-white/20 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
          <FaPlus className="relative z-10 text-sm" />
          <span className="relative z-10">Add Task</span>
        </button>

        <button
          className="group relative flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-red-500 hover:text-red-400 hover:shadow-xl hover:shadow-red-500/10 transform hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
          onClick={onDeleteAllTasks}
        >
          <div className="absolute inset-0 bg-red-500/10 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
          <FaTrash className="relative z-10 text-sm" />
          <span className="relative z-10">Delete All</span>
        </button>
      </div>
    </div>
  );
};

export default TaskActions;
