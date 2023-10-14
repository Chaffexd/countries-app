"use client";

import { useState } from "react";
import ChevronUp from "../Icons/ChevronUp";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="shadow-lg rounded-md p-4 w-1/5 bg-white relative">
      <button className="flex justify-between w-full" onClick={toggleDropdown}>
        Filter by Region <ChevronUp isOpen={isOpen} />
      </button>
      {isOpen && (
        <ul className="mt-6 absolute shadow-lg rounded-md bg-white p-4 w-full left-0">
          <li className="mb-2">Africa</li>
          <li className="mb-2">America</li>
          <li className="mb-2">Asia</li>
          <li className="mb-2">Europe</li>
          <li className="mb-2">Oceania</li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
