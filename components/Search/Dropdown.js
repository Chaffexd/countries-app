"use client";

import { useState } from "react";
import { easeOut, motion } from "framer-motion";
import ChevronUp from "../Icons/ChevronUp";

const Dropdown = ({ onSelectRegion, region }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleRegionSelect = (region) => {
    onSelectRegion(region);
    // also close the drop down after selection
    toggleDropdown();
  };

  // FRAMER MOTION STUFF

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  }
  
  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }

  const buttonVariants = {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 }
  }

  return (
    <motion.div whileTap={{ scale: 0.9 }} className="shadow-lg rounded-md p-4 w-1/5 bg-white relative dark:bg-gray-700 dark:text-white">
      <button  className="flex justify-between w-full dark:bg-gray-700 dark:text-white" onClick={toggleDropdown}>
        {region ? region : "Filter by Region"} <ChevronUp isOpen={isOpen} />
      </button>
      {isOpen && (
        <motion.ul initial="hidden" animate="visible" variants={list} className="mt-6 absolute shadow-lg rounded-md bg-white p-4 w-full left-0 dark:bg-gray-700 dark:text-white">
          <motion.li variants={item} className="mb-2 cursor-pointer hover:text-zinc-300" onClick={() => handleRegionSelect("Africa")}>Africa</motion.li>
          <motion.li variants={item}  className="mb-2 cursor-pointer hover:text-zinc-300" onClick={() => handleRegionSelect("America")}>America</motion.li>
          <motion.li variants={item}  className="mb-2 cursor-pointer hover:text-zinc-300" onClick={() => handleRegionSelect("Asia")}>Asia</motion.li>
          <motion.li variants={item}  className="mb-2 cursor-pointer hover:text-zinc-300" onClick={() => handleRegionSelect("Europe")}>Europe</motion.li>
          <motion.li variants={item} className="mb-2 cursor-pointer hover:text-zinc-300" onClick={() => handleRegionSelect("Oceania")}>Oceania</motion.li>
        </motion.ul>
      )}
    </motion.div>
  );
};

export default Dropdown;
