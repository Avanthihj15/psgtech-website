import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex space-x-2 items-center">
      {isOpen && (
        <input
          placeholder="Start typing to search..."
          className="px-3 py-1 bg-primary-600 rounded-md"
          type="text"
        />
      )}
      <button
        title="search"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
      >
        <FaSearch className="text-lg" />
      </button>
    </div>
  );
};

export default Search;
