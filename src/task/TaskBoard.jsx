import React, { useState } from "react";
import SearchTask from "../../src/task/SearchTask";
import TaskActions from "../../src/task/TaskActions";
import TaskList from "../../src/task/TaskList";
import AddModalTask from "../../src/task/AddModalTask";
import { ToastContainer, toast } from "react-toastify";
import NotFound from "../../src/task/NotFound";

const TaskBoard = () => {
  const defaultTasks = {
    id: crypto.randomUUID(),
    title: "Complete React Project",
    description: "Finish the task management app using React",
    tags: ["React", "JavaScript", "Python"],
    priority: "High",
    favorite: true,
  };

  const [tasks, setTasks] = useState([defaultTasks]);
  const [allTasks, setAllTasks] = useState([defaultTasks]);
  const [showModalTask, setShowModalTask] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const handleAddTask = (newTask, isAdd) => {
    let updatedTasks;
    if (isAdd) {
      updatedTasks = [...tasks, newTask];
    } else {
      updatedTasks = tasks.map((task) =>
        task.id === newTask.id ? newTask : task
      );
    }
    setTasks(updatedTasks);
    setAllTasks(updatedTasks);
    setShowModalTask(false);
    toast.success(
      isAdd ? "Task added successfully!" : "Task updated successfully!"
    );
  };

  const handleEditTask = (task) => {
    setTaskToUpdate(task);
    setShowModalTask(true);
  };

  const handleCloseClick = () => {
    setShowModalTask(false);
    setTaskToUpdate(null);
  };

  const handleDeleteTask = (taskId) => {
    const remainTasks = allTasks.filter((task) => task.id !== taskId);
    setTasks(remainTasks);
    setAllTasks(remainTasks);
    toast.error("Task deleted successfully!");
  };

  const handleDeleteAllTasks = () => {
    if (tasks.length > 0) {
      setTasks([]);
      setAllTasks([]);
      toast.error("All tasks deleted!");
    } else {
      toast.warning("No tasks to delete");
    }
  };

  const handleFavoriteTask = (taskId) => {
    const newTasks = allTasks.map((task) =>
      task.id === taskId ? { ...task, favorite: !task.favorite } : task
    );
    setTasks(newTasks);
    setAllTasks(newTasks);
    toast.info("Task favorite status updated!");
  };

  const handleSearch = (searchTerm) => {
    if (searchTerm.trim() === "") {
      setTasks(allTasks);
    } else {
      const filtered = allTasks.filter((task) =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setTasks(filtered);
    }
  };

  return (
    <section
      className="mb-20 px-3 sm:px-4 md:px-6 lg:px-8 relative overflow-hidden"
      id="tasks"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-purple-400/3 rounded-full blur-3xl"></div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      {showModalTask && (
        <AddModalTask
          onSave={handleAddTask}
          taskToUpdate={taskToUpdate}
          onCloseClick={handleCloseClick}
        />
      )}

      <div className="max-w-7xl mx-auto">
        {/* Search Bar & Actions */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
          <div className="w-full lg:flex-1 lg:max-w-md">
            <SearchTask onSearch={handleSearch} />
          </div>
          <div className="w-full lg:w-auto">
            <TaskActions
              onAddClick={() => setShowModalTask(true)}
              onDeleteAllTasks={handleDeleteAllTasks}
              taskCount={tasks.length}
            />
          </div>
        </div>

        {/* Task List Container */}
        <div className="rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 shadow-2xl px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 overflow-hidden relative">
          {/* Container Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-blue-400/5 rounded-2xl blur-sm -z-10"></div>

          {tasks.length > 0 ? (
            <TaskList
              tasks={tasks}
              onEdit={handleEditTask}
              onDeleteTask={handleDeleteTask}
              onFav={handleFavoriteTask}
            />
          ) : (
            <NotFound />
          )}
        </div>

        {/* Quick Stats */}
        {tasks.length > 0 && (
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>
                Total Tasks:{" "}
                <strong className="text-white">{tasks.length}</strong>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span>
                Favorites:{" "}
                <strong className="text-white">
                  {tasks.filter((t) => t.favorite).length}
                </strong>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>
                High Priority:{" "}
                <strong className="text-white">
                  {tasks.filter((t) => t.priority === "High").length}
                </strong>
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TaskBoard;
