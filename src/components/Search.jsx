import React from "react";
import { FiSearch } from "react-icons/fi";
import styles from "../style/search.module.css";

function Search({ setSearch, search, searchHandler }) {
  return (
    <div className={styles.search}>
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
