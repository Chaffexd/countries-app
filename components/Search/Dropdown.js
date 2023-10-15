"use client";

import { useState } from "react";
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

  return (
    <div className="shadow-lg rounded-md p-4 w-1/5 bg-white relative dark:bg-gray-700 dark:text-white">
      <button className="flex justify-between w-full dark:bg-gray-700 dark:text-white" onClick={toggleDropdown}>
        {region ? region : "Filter by Region"} <ChevronUp isOpen={isOpen} />
      </button>
      {isOpen && (
        <ul className="mt-6 absolute shadow-lg rounded-md bg-white p-4 w-full left-0 dark:bg-gray-700 dark:text-white">
          <li className="mb-2 cursor-pointer hover:text-zinc-300" onClick={() => handleRegionSelect("Africa")}>Africa</li>
          <li className="mb-2 cursor-pointer hover:text-zinc-300" onClick={() => handleRegionSelect("America")}>America</li>
          <li className="mb-2 cursor-pointer hover:text-zinc-300" onClick={() => handleRegionSelect("Asia")}>Asia</li>
          <li className="mb-2 cursor-pointer hover:text-zinc-300" onClick={() => handleRegionSelect("Europe")}>Europe</li>
          <li className="mb-2 cursor-pointer hover:text-zinc-300" onClick={() => handleRegionSelect("Oceania")}>Oceania</li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
