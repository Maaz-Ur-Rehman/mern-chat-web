import React from "react";
import { IoIosSearch } from "react-icons/io";
const SearchInput = () => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full mx-2  "
      />
      <button
        type="submit"
        className="btn btn-circle bg-sky-500 text-white mt-3"
      >
        <IoIosSearch className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
