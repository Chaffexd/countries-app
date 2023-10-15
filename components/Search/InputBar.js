import { useState } from "react";
import SearchIcon from "../Icons/SearchIcon";

const InputBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    const inputValue = event.target.value;

    setQuery(inputValue)
    onSearch(inputValue)
  };

  return (
    <div className="relative w-3/5">
      <label htmlFor="input"></label>
      <div className="flex">
        <i className="absolute inset-y-0 left-0 pl-3 flex items-center">
          <SearchIcon />
        </i>
        <input
          type="text"
          id="input"
          name="input"
          placeholder="Search for a country..."
          className="pl-12 shadow-lg rounded-md p-4 w-full dark:bg-gray-700 dark:placeholder-white"
          value={query}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default InputBar;
