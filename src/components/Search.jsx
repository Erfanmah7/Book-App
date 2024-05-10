import React from "react";
import { FiSearch } from "react-icons/fi";
function Search({ setSearch, search, searchHandler }) {
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      <button onClick={searchHandler}>
        <FiSearch />
      </button>
    </div>
  );
}

export default Search;
