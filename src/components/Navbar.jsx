import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <>
      <nav className="bg-violet-500 flex justify-between items-center py-3  text-white ">
        <motion.logo
          initial={{ y: -40 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <Link to="/" className="font-bold text-xl mx-16 cursor-pointer ">
            iTask
          </Link>
        </motion.logo>
        <motion.ul
          initial={{ y: -40 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="flex gap-10 mx-16"
        >
          <Link to="/" className="hover:font-bold transition-all">
            Home
          </Link>
          <li className="hover:font-bold transition-all">Your Task</li>
        </motion.ul>
      </nav>
    </>
  );
};

export default Navbar;
