import SearchIcon from "../Icons/SearchIcon";

const InputBar = () => {
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
            className="pl-12 shadow-lg rounded-md p-4 w-full"
          />
        </div>
      </div>
    );
  };
  
  export default InputBar;
  
