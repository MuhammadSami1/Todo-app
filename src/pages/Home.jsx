import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

const Home = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = () => {
    setTasks([]);
  };

  return (
    <motion.div
      className="bg-violet-200 my-6 mx-20 rounded-lg min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="py-8 px-20"
      >
        <h1 className="py-1 font-bold text-lg">Add a Todo</h1>
        <input
          type="text"
          className="w-2/4 "
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="bg-violet-500 rounded-md px-1 py-1 mx-5"
          onClick={addTask}
        >
          Add
        </button>
      </motion.div>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="px-20"
      >
        <span className="font-bold text-lg">Your Tasks</span>

        {tasks.map((t, index) => (
          <>
            <div
              key={index}
              className="py-2 px-4 my-3  bg-slate-400  w-2/4 rounded-lg"
            >
              {t}
            </div>

            <button
              className="bg-violet-500 rounded-md px-1 py-1 mx-3 my-4"
              onClick={deleteTask}
            >
              Delete
            </button>
          </>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Home;
